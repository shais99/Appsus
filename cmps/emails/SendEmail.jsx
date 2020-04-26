
export default class SendEmail extends React.Component {

    state = {
        newEmail: {
            name: null,
            body: null,
            to: null,


        },
    }

    componentDidMount() {
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value
        this.setState(prevState => ({ newEmail: { ...prevState.newEmail, [field]: value } }))
    }

    render() {
        // const { filterBy, search } = this.state
        var email = this.state.newEmail
        return (<section className="email-form-content">
            <p>IM HERE</p>

            <form onSubmit={(event) => this.props.sendEmail(event, email)} className="email-form-container flex column">
                <input className="sendmail-input-form" type="text" name='name' placeholder="Enter Your Name!" onChange={this.handleChange} />
                <input className="sendmail-input-form" type="text" name='to' placeholder="Recipients Address" onChange={this.handleChange} />
                <textarea id="" rows="4" cols="30" maxLength="100" name="body" placeholder="Share Your Thoughts" onChange={this.handleChange}>
                </textarea>
                <input className="btn-form" type="submit" />
            </form>
            {/* 
            <div className="email-card-details column flex space-between align-center" key={'fuck this'}>

                <div className="email-preview-topinfo flex ">

                    <p className="email-preview-name">{email.name}</p>
                    <p className="email-preview-to" >{email.to}</p>
                    <p className="email-preview-date" >{email.date}</p>
                </div>
                <div className="email-preview-body">
                    <p className="email-preview-msg" > {email.body}</p>

                </div>
                <button onClick={this.props.isFocusOff}>Back</button>
            </div> */}


        </section>

        )


    }
}