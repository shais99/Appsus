import emailService from "../services/emailService.js"
import ListEmail from '../cmps/emails/ListEmail.jsx'
import EmailDetails from '../cmps/emails/EmailDetails.jsx'
import SendEmail from "../cmps/emails/SendEmail.jsx"
// import UnFinishedEmails from "../cmps/emails/UnFinishedEmails.jsx"
import MainNav from "../cmps/emails/MainNav.jsx"
import EmailFilter from '../cmps/emails/EmailFilter.jsx'
import { eventBus } from '../services/eventBusService.js'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM


export default class Email extends React.Component {
    state = {
        filterBy: null,
        emails: null,
        isSendEmail: false,
        // unReadAmount: null,
        emailReplay: null,
        // unFinished: 1,

    }
    componentDidMount() {
        if (!this.state.emails) {
            this.loadEmails()
        }

    }

    componentDidUpdate(prevProps) {
        // if (prevProps.match.params.filter !== this.props.match.params.filter) {
        //     this.getFilter();
        // }
    }

    getFilter() {
        const filter = this.props.match.params.filter
        switch (filter) {
            case 'sent':
            case 'inbox':
                this.filterByBox(filter)
                break;
            case 'star':
                this.filterByStar()
                break;

        }
    }
    onSetFilter = (filterBy) => {
        console.log('setting filter to', filterBy)
        this.setState({ filterBy }, () => this.loadEmails())
    }
    filterByBox = (filterBy) => {
        var emails = emailService.filterByBox(filterBy)
        this.setState({ filterBy, emails })
    }
    filterByStar = () => {
        var emails = emailService.filterByStar()
        this.setState({ filterBy: 'star', emails })
    }

    loadEmails = () => {
        this.getFilter()
        var emails = emailService.query(this.state.filterBy)
        console.log(emails);
        this.setState({ emails })
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
        this.loadEmails()
        // this.setState(prevState => ({ ...prevState }))
    }
    getUnreadAmount() {
        var amount = emailService.getUnreadAmount()
        // this.setState({ unReadAmount: amount })
        return amount
    }
    toggleIsRead = (ev, email) => {
        ev.stopPropagation()
        emailService.toggleIsRead(email)
        this.loadEmails()
        // this.setState({ isSendEmail: false })

    }

    onReplay = (ev, emailReplay) => {
        window.location.href = `index.html#/email/details/${emailReplay.id}`;
        ev.stopPropagation()
        this.setState({ emailReplay: emailReplay })

    }
    render() {
        const { emails, unReadAmount } = this.state

        return (
            <section className="email-main-content">
                <div className="flex email-content">

                    {this.state.emails && <MainNav />}
                    <div className="main-email-content">
                        <Switch>
                            <Route exact component={(props) => <SendEmail {...props}
                                replayEmail={this.emailReplay}
                                sendEmail={this.sendEmail} />}
                                exact path='/email/compose' />

                            <Route exact component={(props) => <EmailDetails {...props}
                                onReplay={this.props.onReplay}
                                onRemoveEmail={this.props.onRemoveEmail}
                                toggleIsRead={this.props.toggleIsRead}
                                toggleStarEmail={this.props.toggleStarEmail} />}
                                path='/email/details/:emailId' />

                            <Route component={() => <ListEmail
                                onSetFilter={this.onSetFilter}
                                emails={emails}
                                onReplay={this.props.onReplay}
                                toggleIsRead={this.props.toggleIsRead}
                                onRemoveEmail={this.props.onRemoveEmail}
                                toggleStarEmail={this.props.toggleStarEmail}
                                history={this.props.history} />} path='/email' />
                        </Switch>
                    </div>

                    {/* {this.state.unFinished > 0 && <UnFinishedEmails email={this.state.email}></UnFinishedEmails>} */}

                </div>
            </section>
        )
    }
}