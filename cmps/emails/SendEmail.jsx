
export default class SendEmail extends React.Component {

    state = {
        newEmail: {
            name: '',
            body: '',
            toEmail: '',
            subject: '',


        },
        replayEmail: {
            subject: null,
            name: null,
            toEmail: null,
            body: null
        }
    }

    componentDidMount() {
        if (this.props.replayEmail) {
            let email = this.props.replayEmail
            email.subject = 'Re: ' + this.props.replayEmail.subject
            this.setState({ newEmail: email})
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value
        this.setState(prevState => ({ newEmail: { ...prevState.newEmail, [field]: value } }))
    }


    render() {
        var email = this.state.newEmail
        const replayEmail = this.state.newEmail
        return (<section className="email-form-content fade-in">
            <h3>New Message</h3>
            <form onSubmit={(event) => this.props.sendEmail(event, email)} className="email-form-container flex column">
                <input className="sendmail-input-form" type="text" value={replayEmail.name} name='name' placeholder="Name" onChange={this.handleChange} />
                <input className="sendmail-input-form" type="text" value={replayEmail.toEmail} name='toEmail' placeholder="Recipients Address" onChange={this.handleChange} />
                <input className="sendmail-input-form" type="text" value={replayEmail.subject} name='subject' placeholder="Subject" onChange={this.handleChange} />
                <textarea id="" rows="4" cols="30" maxLength="1000" value={replayEmail.body} name="body" placeholder="Share Your Thoughts" onChange={this.handleChange}>
                </textarea>
                <button className="btn-form" type="submit">Submit</button>
            </form>
        </section>
        )
    }
}