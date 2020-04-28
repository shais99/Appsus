
export default class EmailPreview extends React.Component {

    componentDidMount() {


    }
    isStarred(email) {
        if (email.isStarred) return 'star'
        return 'starempty'
    }
    onOpenMail(emailId) {
        this.props.history.push(`/email/details/${emailId}`)
    }
    toggleStarEmail(ev, email) {
        console.log("isStarred -> 1231231231ev", ev)
        ev.stopPropagation()
        // ev.preventDefault()
        this.props.toggleStarEmail(email)
    }
    render() {
        const { email } = this.props
        return (
            <div onClick={() => this.onOpenMail(email.id)}
                className={` flex space-between align-center fade-in ${email.isRead ? 'email-isRead' : 'email-card'}`} >
                <img onClick={(event) => this.toggleStarEmail(event, email)}
                    className="email-card-star biggerAnim" title="Save As Starred" src={`assets/img/${this.isStarred(email)}.png`} />
                {/* // Info */}
                <h2 title="Name" className={`email-card-name ${email.isRead ? 'emailCard-effect' : ''}`}>{email.name}</h2>
                <p className={`email-card-to ${email.isRead ? 'emailCard-effect' : ''}`}>{email.toEmail}</p>
                <div className="email-card-subject-body flex column">
                    <p title="Subject" className={`email-card-subject ${email.isRead ? 'emailCard-effect' : ''}`} > {email.subject}</p>
                    <p title="Message" className={`email-card-msg ${email.isRead ? 'emailCard-effect' : ''}`} >{email.body}</p>
                </div>
                <p title="Current Date" className={`email-card-date ${email.isRead ? 'emailCard-effect' : ''}`} > {email.date}</p>
               


                    {/* // Buttons! */}
                    <div className="email-list-btns">
                    <img onClick={(event) => this.props.onReplay(event, email)} className="email-card-star biggerAnim"
                        title="Replay Email" src={`assets/img/replay.png`} alt="" srcSet="" />
                    <img onClick={(event) => this.props.onRemoveEmail(event, email.id)} className="email-card-star smallerAnim"
                        title="Delete" src={`assets/img/delete.png`} alt="" srcSet="" />
                    <img onClick={(event) => this.props.toggleIsRead(event, email)} className="email-card-star smallerAnim"
                        title="Toggle Read/Unread" src={`assets/img/${email.isRead ? 'read' : 'unread'}.png`} alt="" srcSet="" />
                </div>
            </div>)



    }
}