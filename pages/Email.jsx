import emailService from "../services/emailService.js"
import ListEmail from '../cmps/emails/ListEmail.jsx'
import EmailDetails from '../cmps/emails/EmailDetails.jsx'
import SendEmail from "../cmps/emails/SendEmail.jsx"
import UnFinishedEmails from "../cmps/emails/UnFinishedEmails.jsx"
import MainNav from "../cmps/emails/MainNav.jsx"
import { eventBus } from '../services/eventBusService.js'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM


export default class Email extends React.Component {
    state = {
        filterBy: null,
        emails: null,
        isFocus: false,
        email: null,
        currCmp: 'list',
        isSendEmail: false,
        currTab: 'inbox',
        unReadAmount: null,
        emailReplay: null,
        unFinished: 1,
        // lastEmail: null
    }
    componentDidMount() {


        // this.getFilter()
        this.loadEmails()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.filter !== this.props.match.params.filter) {
            console.log('Route changed, so we should load the new car');
            this.getFilter();
        }
     }

    getFilter() {
        const filter = this.props.match.params.filter
        console.log('hey', filter)
        // if (filter) {
        //     console.log('filterBy url by', filter)
        // let emails
        switch (filter) {
            case 'inbox':
                this.filterByBox('inbox')
                break;
            case 'sent':
            this.filterByBox('sent')
                break;
            case 'star':
                this.filterByStar()
                break;
        }
        // return emails
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadEmails())
    }


    filterByBox = (filterBy) => {
        this.isFocusOff()
        var emails = emailService.filterByBox(filterBy)
        // return emails
        this.setState({ filterBy: filterBy, emails: emails, isSendEmail: false, currTab: filterBy })
    }
    filterByStar = () => {
        this.onToggleCompose()
        this.isFocusOff()
        var emails = emailService.filterByStar()
        this.setState({ filterBy: 'star', emails: emails, isSendEmail: false, currTab: 'star' })
    }


    loadEmails = () => {
        this.getFilter()
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
        window.location.href = `details/${email.id}/`
        email.isFocus = true
        email.isRead = true
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
        this.setState({ isSendEmail: false })
    }
    sendEmail = (ev, newEmail) => {
        eventBus.emit('show-msg', { txt: 'Email Sent!' })
        this.filterByBox('sent')
        window.location.href = 'index.html#/email/sent';
        this.onToggleMailDraft(-1)
        this.isFocusOff()
        ev.preventDefault()
        console.log('creating new email', newEmail)
        emailService.createEmail(newEmail.name, newEmail.to, newEmail.body, false, 'sent')
        this.setState({ isFocus: null, email: null, isSendEmail: false })

    }
    toggleStarEmail = (email) => {
        // ev.stopPropagation()
        emailService.toggleStarEmail(email)

        this.setState(prevState => ({ ...prevState }))
    }

    onToggleCompose = () => {
        if (!this.state.isSendEmail) return this.setState({ isSendEmail: true, currTab: 'compose' })
        this.setState({ isSendEmail: false })
    }
    getUnreadAmount() {
        var amount = emailService.getUnreadAmount()
        // this.setState({ unReadAmount: amount })
        return amount
    }
    toggleIsRead = (ev, email) => {
        ev.stopPropagation()
        emailService.toggleIsRead(email)
        this.setState({ isSendEmail: false })

    }
    onToggleMailDraft = (num) => {
        this.setState({ unFinished: this.state.unFinished += num })
    }
    onReplay = (ev, emailReplay) => {
        window.location.href = `index.html#/email/details/${emailReplay.id}`;
        ev.stopPropagation()
        this.setState({ emailReplay: emailReplay })
        this.onToggleCompose()
    }
    render() {
        const { currTab, unReadAmount } = this.state
        
        return (
            <section className="email-main-content">
                <div className="flex email-content">



                    {this.state.emails && <MainNav isFocusOff={this.isFocusOff} filterByBox={this.filterByBox} toggleIsRead={this.toggleIsRead} toggleStarEmail={this.toggleStarEmail} getEmails={this.getEmails} onSetFilter={this.onSetFilter} isFocus={this.isFocus} onReplay={this.onReplay} email={this.state.email} onRemoveEmail={this.onRemoveEmail} replayEmail={this.state.emailReplay} sendEmail={this.sendEmail} getUnreadAmount={this.getUnreadAmount} isFocus={this.isFocus} isSendEmail={this.state.isSendEmail} onToggleCompose={this.onToggleCompose} filterByStar={this.filterByStar} />}

                    {/* {this.state.unFinished > 0 && <UnFinishedEmails email={this.state.email}></UnFinishedEmails>} */}

                    {/* {this.state.isSendEmail && <SendEmail replayEmail={this.state.emailReplay} sendEmail={this.sendEmail}></SendEmail>} */}

                    {/* {this.state.isFocus && !this.state.isSendEmail && <EmailDetails onReplay={this.onReplay} email={this.state.email} onRemoveEmail={this.onRemoveEmail} toggleIsRead={this.toggleIsRead} toggleStarEmail={this.toggleStarEmail} isFocusOff={this.isFocusOff}></EmailDetails>} */}



                    {/* {!this.state.isFocus && !this.state.isSendEmail && <ListEmail onReplay={this.onReplay} toggleIsRead={this.toggleIsRead} onRemoveEmail={this.onRemoveEmail} toggleStarEmail={this.toggleStarEmail} getEmails={this.getEmails} onSetFilter={this.onSetFilter} isFocus={this.isFocus}></ListEmail>} */}

                </div>
            </section>
        )
    }
}