

export default class EmailDetails extends React.Component {

    state = {
        filter: {
            filterBy: '',
            search: ''
        }
    }
    componentWillMount() {
        // this.props.email.isRead = true

    }
    componentDidMount() {
        // this.props.email.isRead = true
    }
    isStarred(email) {
        if (email.isStarred) return 'star'
        return 'starempty-white'
    }

    toggleStarEmail(ev, email) {
        console.log("isStarred -> 1231231231ev", ev)
        ev.stopPropagation()
        this.props.toggleStarEmail(email)
    }
    render() {
        const { filterBy, search } = this.state
        var email = this.props.email
        return (

            <div className="email-card-details column flex space-between align-center fade-in" key={'fuck this'}>

                <div className="email-details-topinfo border flex align-center space-between">
                    <div className="details-name-toEmail">
                        <p className="email-details-name">{email.name}</p>
                        <p className="email-details-to" >{email.toEmail}</p>

                    </div>
                   
                    <div className="email-details-right-btns">
                        <img onClick={(event) => this.toggleStarEmail(event, email)} className="email-card-star biggerAnim" title="Save As Starred" src={`assets/img/${this.isStarred(email)}.png`} alt="" srcSet="" />
                        <img onClick={(event) => this.props.onReplay(event, email)} className="email-card-star biggerAnim" title="Replay Email" src={`assets/img/replay-white.png`} alt="" srcSet="" />
                        <img onClick={(event) => this.props.onRemoveEmail(event, email.id)} className="email-card-star smallerAnim" title="Delete" src={`assets/img/delete-white.png`} alt="" srcSet="" />
                        <img onClick={(event) => this.props.toggleIsRead(event, email)} className="email-card-star smallerAnim" title="Toggle Read/Unread" src={`assets/img/${email.isRead ? 'read-white' : 'unread-white'}.png`} alt="" srcSet="" />
                    </div>
                </div>
                <div className="email-details-body border">
                    <p className="email-details-subject" >{email.subject} <p className="email-details-date" >{email.date}</p></p>
                    <p className="email-details-msg" > {email.body}</p>

                </div>
                <button className="email-details-back" onClick={this.props.isFocusOff}>Back</button>
            </div>



        )


    }
}