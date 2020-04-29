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
        filterByBox: null,
        emails: null,
        // unReadAmount: null,
        emailReplay: null,
        // unFinished: 1,
        isChecked: false

    }
    componentDidMount() {
        this.loadEmails()

    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.filter !== this.props.match.params.filter) {
            this.onSetFilter(this.state.filterBy, this.getFilterByBox())
        }
    }

    getFilterByBox() {
        const filter = this.props.match.params.filter
        return filter
    }
    onSetFilter = (filterBy = this.state.filterBy, filterByBox = this.state.filterByBox) => {
        this.setState({ filterBy, filterByBox }, () => this.loadEmails())
    }
    filterByBox = (filterBy) => {
        var emails = emailService.filterByBox(filterBy)
        this.setState({ filterBy, emails })
    }
    filterByStar = () => {
        var emails = emailService.filterByStar()
        this.setState({ filterBy: 'star', emails })
    }

    loadEmails = (sortRead = false) => {
        var emails = emailService.query(this.state.filterBy, this.getFilterByBox(), sortRead)
        this.setState({ emails })
    }

    onRemoveEmail = (emailId) => {
        console.log('remove email', emailId)
        emailService.removeEmail(emailId)
            .then(() => {
                // this.props.history.goBack()
                this.loadEmails()
            })

    }
    sendEmail = (ev, newEmail, isReply = false) => {
        ev.preventDefault()
        eventBus.emit('show-msg', { txt: 'Email Sent!' })
        console.log('event', ev);
        if (isReply) newEmail.subject = 'Re: ' + newEmail.subject
        emailService.createEmail(newEmail.name, newEmail.to, newEmail.body, false, 'sent', newEmail.subject)
        this.setState({ email: null, })
        this.props.history.push('/email/sent')
    }
    toggleStarEmail = (email) => {
        emailService.toggleStarEmail(email)
        this.loadEmails()
    }
    getUnreadAmount() {
        var amount = emailService.getUnreadAmount()
        return amount
    }
    toggleIsRead = (email) => {
        emailService.toggleIsRead(email)
        this.loadEmails()
    }
    toggleSortIsRead = () => {
        if (this.state.isChecked) {
            this.loadEmails(false)
            this.setState({isChecked : false})
        } else{
            this.loadEmails(true)
            this.setState({isChecked : true})
        }
    }
    onReply = (ev, emailReplay) => {
        ev.stopPropagation()
        this.props.history.push(`/email/compose/${emailReplay.id}`)
    }
    render() {
        const { emails, unReadAmount } = this.state

        return (
            <section className="email-main-content">
                <div className="flex email-content ">

                    {this.state.emails && <MainNav getUnreadAmount={this.getUnreadAmount} />}
                    <div className="main-email-content">
                        <Switch>
                            <Route component={(props) => <SendEmail {...props}
                                sendEmail={this.sendEmail} />}
                                path='/email/compose/:id' />

                            <Route component={(props) => <SendEmail {...props}
                                sendEmail={this.sendEmail} />}
                                path='/email/compose/' />

                            <Route exact component={(props) => <EmailDetails {...props}
                                onReplay={this.onReply}
                                onRemoveEmail={this.onRemoveEmail}
                                toggleIsRead={this.toggleIsRead}
                                toggleStarEmail={this.toggleStarEmail} />}
                                path='/email/details/:emailId' />
                            <React.Fragment>
                                <section className="email-section fade-in">
                                    <EmailFilter onSetFilter={this.onSetFilter}></EmailFilter>
                                    <div className="emails-list-topbar flex ">
                                        <h3>Read/Unread</h3>
                                        <input onChange={this.toggleSortIsRead} title="Filter Read/Unread" className="emails-switch" type="checkbox" />
                                    </div>
                                    <Route component={() => <ListEmail

                                        emails={emails}
                                        onReplay={this.onReply}
                                        toggleIsRead={this.toggleIsRead}
                                        onRemoveEmail={this.onRemoveEmail}
                                        toggleStarEmail={this.toggleStarEmail}
                                        history={this.props.history} />} path='/email' />
                                </section>
                            </React.Fragment>
                        </Switch>
                    </div>

                    {/* {this.state.unFinished > 0 && <UnFinishedEmails email={this.state.email}></UnFinishedEmails>} */}

                </div>
            </section>
        )
    }
}