import EmailPreview from "./EmailPreview.jsx"
const { Route, Switch, Link } = ReactRouterDOM
import emailService from '../../services/emailService.js'
import EmailFilter from '/EmailFilter.jsx'
export default class ListEmail extends React.Component {
    state = {
        filter: {
            filterBy: '',
            search: ''
        }
    }

    componentDidMount() {
    }

    render() {

        const { emails } = this.props
        return ((!emails) ?
            <h4 className="empty-box-msg" >This Box this empty!</h4> : <section className="email-section fade-in">

                <EmailFilter onSetFilter={this.props.onSetFilter}></EmailFilter>

                <div className="emails-list flex column fade-in">
                    {emails && emails.map((email, idx) => {
                        return (
                            <EmailPreview onReplay={this.props.onReplay} onRemoveEmail={this.props.onRemoveEmail}
                                toggleIsRead={this.props.toggleIsRead} history={this.props.history}
                                email={email} key={email.id}></EmailPreview>
                        )
                    })}
                </div>
            </section>
        )
    }
}