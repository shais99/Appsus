
import emailService from '../../services/emailService.js'
export default class EmailDetails extends React.Component {
    state = {
        email: null,
    }
    componentDidMount() {
        this.loadEmail()
    }

    loadEmail() {
        const id = this.props.match.params.emailId
        let email = emailService.getById(id)
        this.setState({ email })
    }
    onRemoveEmail(ev, id) {
        this.props.history.goBack()
        ev.stopPropagation()
        this.props.onRemoveEmail(id)
    }

    isStarred(email) {
        if (email.isStarred) return 'star'
        return 'starempty-white'
    }

    toggleStarEmail(ev, email) {
        ev.stopPropagation()
        this.props.toggleStarEmail(email)
    }
    onClickBack = () => {
        this.props.history.goBack()
    }

    saveAsNote(email) {
        this.props.history.push(`/notes?emailName=${email.name}&emailSubject=${email.subject}&emailBody=${email.body}`)
    }
    render() {
        var email = this.state.email
        const Loading = <h4 className="empty-box-msg" >This Box this empty!</h4>
        return ((!email) ? Loading : <div className="email-card-details column flex space-between align-center " key={'asd'}>
            <div className="email-details-topinfo border flex align-center space-between">
                <div className="details-name-toEmail">
                    <p className="email-details-name">{email.name}</p>
                    <p className="email-details-to" >{email.toEmail}</p>
                </div>
                <div className="email-details-right-btns">
                    <img onClick={(event) => this.toggleStarEmail(event, email)} className="email-card-star biggerAnim" title="Save As Starred" src={`assets/img/${this.isStarred(email)}.png`} alt="" srcSet="" />
                    <img onClick={(event) => this.saveAsNote(email)} className="email-card-star biggerAnim" title="Save As Note" src={`assets/img/writenote-white.png`} alt="" srcSet="" />
                    <img onClick={(event) => this.props.onReplay(event, email)} className="email-card-star biggerAnim" title="Replay Email" src={`assets/img/replay-white.png`} alt="" srcSet="" />
                    <img onClick={(event) => this.onRemoveEmail(event, email.id,true)} className="email-card-star biggerAnim" title="Delete" src={`assets/img/delete-white.png`} alt="" srcSet="" />
                    <img onClick={(event) => this.props.toggleIsRead(event, email)} className="email-card-star biggerAnim" title="Toggle Read/Unread" src={`assets/img/${email.isRead ? 'read-white' : 'unread-white'}.png`} alt="" srcSet="" />
                </div>
            </div>
            <div className="email-details-body fade-in border">
                <p className="email-details-subject" >{email.subject} <span className="email-details-date" >{email.date}</span></p>
                <p className="email-details-msg" > {email.body}</p>
                <p className="email-details-toEmail" > {email.toEmail}</p>
            </div>
            <button className="email-details-back" onClick={this.onClickBack}>Back</button>
        </div>
        )
    }
}