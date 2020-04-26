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

    toggleStarEmail(ev,email){
        console.log("isStarred -> 1231231231ev", ev)
        ev.stopPropagation()
        this.props.toggleStarEmail(email)
    }
    render() {
        const { filterBy, search } = this.state
        var emails = this.getEmails(filterBy)
        return (
            <section className="email-section">
                <form onSubmit={this.onFilter}>
                    <input className="email-search" type="text" name='search' placeholder="Search" value={search} onChange={this.handleChange} />
                </form>
                <div className="emails-list flex wrap column">
                    {emails.map((email, idx) => {
                        return (
                            <div onClick={() => this.props.isFocus(email)} className="email-card flex space-between align-center" key={idx}>
                                <img onClick={(event) => this.toggleStarEmail(event,email)} className="email-card-star" src={`assets/img/${this.isStarred(email)}.png`} alt="" srcSet="" />
                                <h2 className="email-card-name">Name: {email.name}</h2>
                                <p className="email-card-to" >Recipient: {email.to}</p>
                                <p className="email-card-msg" >Messege: {email.body}</p>
                                <p className="email-card-date" >Sent AT: {email.date}</p>
                                <img onClick={(event) => this.props.onRemoveEmail(event,email.id)} className="email-card-star" src={`assets/img/delete.png`} alt="" srcSet="" />
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}