import emailService from "../services/emailService.js"
import ListEmail from '../cmps/emails/ListEmail.jsx'
import EmailDetails from '../cmps/emails/EmailDetails.jsx'
import SendEmail from "../cmps/emails/SendEmail.jsx"
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export default class Email extends React.Component {
    state = {
        filterBy: null,
        emails: null,
        isFocus: false,
        email: null,
        currCmp: 'list',
        isSendEmail: false,
        currTab: 'inbox'
    }
    componentDidMount() {
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadEmails())
    }


    filterByBox(filterBy) {
        this.isFocusOff()
        var emails = emailService.filterByBox(filterBy)
        this.setState({ filterBy: filterBy, emails: emails, isSendEmail: false,  currTab: filterBy})
    }
    filterByStar() {
        this.onToggleCompose()
        this.isFocusOff()
        var emails = emailService.filterByStar()
        this.setState({ filterBy: 'star', emails: emails, isSendEmail: false, currTab: 'star' })
    }


    loadEmails = () => {
        var emails = emailService.query(this.state.filterBy)
        this.setState({ emails })
    }

    getEmails = () => {
        if (!this.state.emails) {
            console.log('returning all emails')
            return emailService.query()
        }
        return this.state.emails
    }

    isFocus = (email) => {
        email.isFocus = true
        console.log('setting Is focus True For', email)
        this.setState({ isFocus: true, email: email, isSendEmail: false })
    }

    getEmail(email) {
        return email
    }
    isFocusOff = () => {

        this.setState({ isFocus: null, email: null, isSendEmail: false })
    }
    onRemoveEmail = (ev, emailId) => {
        ev.stopPropagation()
        emailService.removeEmail(emailId)
        this.setState(prevState => ({ ...prevState }))

    }
    sendEmail = (ev, newEmail) => {
        this.isFocusOff()
        ev.preventDefault()
        console.log('creating new email', newEmail)
        emailService.createEmail(newEmail.name, newEmail.to, newEmail.body, false, 'sent')
        this.setState({ isFocus: null, email: null, isSendEmail: false })

    }
    toggleStarEmail = (email) => {
        emailService.toggleStarEmail(email)

        this.setState(prevState => ({ ...prevState }))
    }

    onToggleCompose = () => {
        if (!this.state.isSendEmail) return this.setState({ isSendEmail: true,  currTab: 'compose' })
        this.setState({ isSendEmail: false })
    }


    render() {
        const { currTab } = this.state
        return (
            <section className="email-main-content">
                <div className="flex email-content">
                    <div className="box-side-nav">
                        <div className={`email-send-btn flex even align-center ${currTab === 'compose' ? 'active-tab' : ''}`}>
                            <img onClick={() => this.onToggleCompose('important')} src="../assets/img/googlePlus.png" alt="" />
                            <p>Compose</p>
                        </div>
                        <div className={`email-send-btn flex even align-center ${currTab === 'starred' ? 'active-tab' : ''}`} onClick={() => this.filterByStar()}>
                            <img src="../assets/img/star.png" alt="" />
                            <p>Starred</p>
                        </div>
                        <div className={`email-send-btn flex even align-center ${currTab === 'inbox' ? 'active-tab' : ''}`} onClick={() => this.filterByBox('inbox')}>
                            <img src="../assets/img/inbox.png" alt="" />
                            <p>Inbox</p>
                        </div>



                        <div id="sent" className={`email-send-btn flex even align-center ${currTab === 'sent' ? 'active-tab' : ''}`} onClick={() => this.filterByBox('sent')}>
                            <img src="../assets/img/sent.png" alt="" />
                            <p>Sent</p>
                        </div>

                        <p onClick={() => this.filterByBox('important')}>Important</p>
                    </div>
                    <div>
                        {this.state.isSendEmail && <SendEmail sendEmail={this.sendEmail}></SendEmail>}
                        {this.state.isFocus && !this.state.isSendEmail && <EmailDetails email={this.state.email} isFocusOff={this.isFocusOff}></EmailDetails>}
                        {!this.state.isFocus && !this.state.isSendEmail && <ListEmail onRemoveEmail={this.onRemoveEmail} toggleStarEmail={this.toggleStarEmail} getEmails={this.getEmails} onSetFilter={this.onSetFilter} isFocus={this.isFocus}></ListEmail>}
                    </div>
                </div>
            </section>
        )
    }
}