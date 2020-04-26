export default class ListEmail extends React.Component {

    state = {

    }

    componentDidMount() {
        console.log('im mounted!')
        console.log("ListEmail -> render -> props.emails", this.props.emails)
    }

    getEmails() {
        var emails = this.props.getEmails()
        return emails
    }

    render() {

        return (
            <section>
                <h2>EMail List :</h2>
                <div className="emails-list flex wrap column">
                    {this.getEmails().map((email, idx) => {
                        return (
                            <div className="email-card flex space-between align-center" key={idx}>
                                <h2 className="email-card-name">Name: {email.name}</h2>
                                <p className="email-card-to" >Recipient: {email.to}</p>
                                <p className="email-card-msg" >Messege: {email.body}</p>
                                <p className="email-card-date" >Sent AT: {email.date}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        )


    }
}