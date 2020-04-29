
const { Route, Switch, Link, useParams } = ReactRouterDOM
import emailService from "../../services/emailService.js"
export default class SendEmail extends React.Component {

    state = {
        email: {
            name: '',
            body: '',
            toEmail: '',
            subject: '',
            type: '',
            id: 'unSet',
        },
        isReAdded: false
    }
    splitTodo(str) {
        let newStr = str.split(',', 500)
        let newStrJoin = newStr.join('\n\n')
        return newStrJoin
    }
    getNotesContent = () => {
        let noteToEmail = {}
        let type = this.getParameterByName('type')
        let content = this.getParameterByName('content')
        if (type === 'NoteTodos') content = this.splitTodo(content)
        if (type === 'NoteEmail') noteToEmail.name = this.getParameterByName('emailName')
        noteToEmail.subject = this.getParameterByName('subject')
        noteToEmail.body = content + '\n\n\n Note Created At: ' + this.getParameterByName('createdAt')
        this.setState({ email: noteToEmail })
    }
    componentDidMount() {
        if (this.props.match.params.id && this.state.email.id === 'unSet') {
            this.loadEmail()
        }
        let isNote = this.getParameterByName('type')
        if (isNote) {
            this.getNotesContent()
        }
        this.setState({ isReAdded: true })
    }
    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    loadEmail = () => {
        console.log('Loading EMails')
        const id = this.props.match.params.id
        console.log('laoding email id ', id)
        let email = emailService.getById(id)
        if (this.state.email.id !== 'unSet') {
            let subject = 'Re' + email.subject
            email.subject = '' + subject
        }
        this.setState({ email: { ...email } })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ email: { ...prevState.email, [field]: value } }))
    }
    render() {
        var { email } = this.state
        return (<section className="email-form-content fade-in">
            <h3>New Message</h3>
            <form onSubmit={(event) => this.props.sendEmail(event, email, true)} className="email-form-container flex column">
                <input className="sendmail-input-form" type="text"
                    value={email.name} name='name' placeholder="Name" onChange={this.handleChange} />
                <input className="sendmail-input-form" type="text"
                    value={email.toEmail} name='toEmail' placeholder="Recipients Address" onChange={this.handleChange} />
                <input className="sendmail-input-form" type="text"
                    value={email.subject} name='subject' placeholder="Subject" onChange={this.handleChange} />
                <textarea id="" rows="4" cols="30" maxLength="1000"
                    value={email.body} name="body" placeholder="Share Your Thoughts" onChange={this.handleChange}>
                </textarea>
                <button className="btn-form" >Submit</button>
            </form>
        </section>
        )
    }
}