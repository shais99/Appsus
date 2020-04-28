
const { Route, Switch, Link, useParams } = ReactRouterDOM
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
        emailService.getById(id)
            .then(email => {
                this.setState({ email })
            })
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
        this.props.history.push(`/email/${this.state.email.isStarred ? 'star' : this.state.email.box}`)
        // this.props.isFocusOff
    }
    render() {
        const { filterBy, search } = this.state
        var email = this.state.email
        const Loading = <h4 className="empty-box-msg" >This Box this empty!</h4>
        return ((!email) ? Loading : <div className="email-card-details column flex space-between align-center fade-in" key={'asd'}>
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
                <p className="email-details-subject" >{email.subject} <span className="email-details-date" >{email.date}</span></p>
                <p className="email-details-msg" > {email.body}</p>

            </div>
            {/* <Link to="/email"> */}
            <button className="email-details-back" onClick={this.onClickBack}>Back</button>
            {/* </Link> */}

        </div>



        )


    }
}