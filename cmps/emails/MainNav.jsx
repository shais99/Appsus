const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
import emailService from '../../services/emailService.js'
import ListEmail from 'ListEmail.jsx'
import EmailDetails from 'EmailDetails.jsx'
import SendEmail from "SendEmail.jsx"



export default class MainNav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="box-side-nav fade-in">
                    <div>
                        <h2 className="hello-user-header">Hello {emailService.getCurrUser()}</h2>
                    </div>
                    <Link to="/email/compose">
                        <div onClick={() => this.props.onToggleCompose('important')} className={` email-send-btn flex even align-center ${this.props.currTab === 'compose' ? 'active-tab' : ''}`}>
                            <img src="assets/img/googlePlus.png" alt="" />
                            <p>Compose</p>
                        </div>
                    </Link>
                    <Link to="/email/">

                        <div className={`email-send-btn flex even align-center ${this.props.currTab === 'star' ? 'active-tab' : ''}`} onClick={() => this.props.filterByStar()}>
                            <img src="assets/img/star.png" alt="" />
                            <p>Starred</p>
                        </div>
                    </Link>
                    <Link to="/email">

                        <div className={`container-number-pop email-send-btn flex even align-center ${this.props.currTab === 'inbox' ? 'active-tab' : ''}`} onClick={() => this.props.filterByBox('inbox')}>
                            <img src="assets/img/inbox.png" alt="" />
                            <h4 className="number-pop flex align-center justify-center" hidden={this.props.getUnreadAmount() < 1}>{this.props.getUnreadAmount()}</h4>
                            <p>Inbox</p>
                        </div>
                    </Link>
                    <Link to="/email">
                        <div id="sent" className={`email-send-btn flex even align-center ${this.props.currTab === 'sent' ? 'active-tab' : ''}`} onClick={() => this.props.filterByBox('sent')}>
                            <img src="assets/img/sent.png" alt="" />
                            <p>Sent</p>
                        </div>
                    </Link>
                </div>
                <div className="main-email-content">

                    <Switch>


                        <Route component={(props) => <SendEmail {...props} replayEmail={this.props.emailReplay} sendEmail={this.props.sendEmail} />} path='/email/compose' />

                        <Route component={(props) => <EmailDetails {...props} onReplay={this.props.onReplay} email={this.props.email} onRemoveEmail={this.props.onRemoveEmail} toggleIsRead={this.props.toggleIsRead} toggleStarEmail={this.props.toggleStarEmail} isFocusOff={this.props.isFocusOff} />} path='/email/:emailId' />
                        {/* YOU HAVE TO PASS PROPS FROM ROUTE INTO THE NESTED ROUTE! :))))) */}
                                       {/* HERE                   AND HERE!!!! */}
                        <Route component={(props) => <ListEmail {...props} onReplay={this.props.onReplay} toggleIsRead={this.props.toggleIsRead} onRemoveEmail={this.props.onRemoveEmail} toggleStarEmail={this.props.toggleStarEmail} getEmails={this.props.getEmails} onSetFilter={this.props.onSetFilter} isFocus={this.props.isFocus} />} path='/email' />

                    </Switch>
                </div>

            </React.Fragment>
        )
    }
}