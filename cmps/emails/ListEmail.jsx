import EmailPreview from "./EmailDetails.jsx"

export default class ListEmail extends React.Component {

    state = {
        filter: {
            filterBy: '',
            search: ''
        }
    }

    componentDidMount() {
    }

    getEmails(filterBy) {
        var emails = this.props.getEmails(filterBy)
        return emails
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter.search)
        })
    }
    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter.search)
    }
    isStarred(email) {
        if (email.isStarred) return 'star'
        return 'starempty'
    }

    toggleStarEmail(ev, email) {
        console.log("isStarred -> 1231231231ev", ev)
        ev.stopPropagation()
        this.props.toggleStarEmail(email)
    }
    render() {
        const { filterBy, search } = this.state
        var emails = this.getEmails(filterBy)
        return (
            <section className="email-section fade-in">
                <form className="flex align-center justify-center" onSubmit={this.onFilter}>
                    <img className="email-search-img smallerAnim" src="assets/img/search.png" alt=""/>
                    <input className="email-search" type="text" name='search' placeholder="Search" value={search} onChange={this.handleChange} />
                </form>
                <div className="emails-list flex column fade-in">
                    {emails.map((email, idx) => {
                        return (
                            <div onClick={() => this.props.isFocus(email)} className={` flex space-between align-center fade-in ${email.isRead ? 'email-isRead' : 'email-card'}`} key={idx}>
                                 <img onClick={(event) => this.toggleStarEmail(event, email)} className="email-card-star biggerAnim" title="Save As Starred" src={`assets/img/${this.isStarred(email)}.png`} alt="" srcSet="" />
                                <h2 title="Name" className={`email-card-name ${email.isRead ? 'read-email-lowopcatiy' : ''}`}>{email.name}</h2>
                                {/* <p className={`email-card-to ${email.isRead ? 'read-email-lowopcatiy' : ''}`}>{email.toEmail}</p> */}
                               
                                <p title="Subject" className={`email-card-to ${email.isRead ? 'read-email-lowopcatiy' : ''}`} > {email.subject}</p>
                                
                                <p title="Message" className={`email-card-msg ${email.isRead ? 'read-email-lowopcatiy' : ''}`} >{email.body}</p>
                                <p title="Current Date" className={`email-card-date ${email.isRead ? 'read-email-lowopcatiy' : ''}`} > {email.date}</p>
                                <div className="email-list-btns">
                                <img onClick={(event) => this.props.onReplay(event, email)} className="email-card-star biggerAnim" title="Replay Email" src={`assets/img/replay.png`} alt="" srcSet="" />
                                <img onClick={(event) => this.props.onRemoveEmail(event, email.id)} className="email-card-star smallerAnim" title="Delete" src={`assets/img/delete.png`} alt="" srcSet="" />
                                <img onClick={(event) => this.props.toggleIsRead(event, email)} className="email-card-star smallerAnim" title="Toggle Read/Unread" src={`assets/img/${email.isRead ? 'read' : 'unread'}.png`} alt="" srcSet="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}