
const { Route, Switch, Link, useParams } = ReactRouterDOM
import emailService from "../../services/emailService.js"
export default class SendEmail extends React.Component {

    state = {
        email: {
            name: '',
            body: '',
            toEmail: '',
            subject: '',
            id: 'unSet',
        },
        isReAdded: false

    }

    componentDidMount() {
        console.log('state', this.state.email);

        if (this.props.match.params.id && this.state.email.id === 'unSet') {
            this.loadEmail()
        }
        this.setState({ isReAdded: true })
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
        // let subject = 'Re: ' + email.subject
        // email.subject 
        // = subject
        this.setState({ email: { ...email } })
        console.log('email loaded email', email)



        // emailService.getById(id)
        // .then(email => {
        //     let subject = 'Re: ' + email.subject
        //     email.subject = subject

        //     this.setState({ email })
        // })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ email: { ...prevState.email, [field]: value } }))
    }

    // getSTR = () => {
    //     var { email, isReAdded } = this.state
    //     let str

    //     if (email.id !== 'unSet') {
    //         str = 'Re: ' + email.subject
    //     } else {
    //         str = email.subject
    //     }
    //     return str
    // }

    // (isReAdded && email.id === 'unSet') ? email.subject : 'Re:' + email.subject
    render() {
        var { email, isReAdded } = this.state
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