import EmailPreview from "./EmailPreview.jsx"
const { Route, Switch, Link } = ReactRouterDOM
export default class ListEmail extends React.Component {
    render() {
        const { emails } = this.props
        return (
            <div className="emails-list flex column">
                {!emails ? <h4 className="empty-box-msg" >This Box this empty!</h4> : emails.map((email, idx) => {
                    return (
                        <EmailPreview onReplay={this.props.onReplay} onRemoveEmail={this.props.onRemoveEmail}
                            toggleIsRead={this.props.toggleIsRead} history={this.props.history}
                            email={email} key={email.id} toggleStarEmail={this.props.toggleStarEmail}></EmailPreview>
                    )
                })}
            </div>
        )
    }
}