import EmailPreview from "./EmailPreview.jsx"

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
    isSaved(email){


       if(email.isSaved) return 'star'
       return 'starempty'
    }

    render() {
        const { filterBy,search } = this.state
        var emails = this.getEmails(filterBy)
        return (
            <section className="email-section">
                <h2>Email List :</h2>
                <form onSubmit={this.onFilter}>
                    <input className="email-search" type="text" name='search' placeholder="Search" value={search} onChange={this.handleChange} />
                </form>
                <div className="emails-list flex wrap column">
                    {emails.map((email, idx) => {
                        return (
                            <div className="email-card flex space-between align-center" key={idx}>
                                <img className="email-card-star" src={`assets/img/${this.isSaved(email)}.png`} alt="" srcset=""/>
                                <h2 className="email-card-name">Name: {email.name}</h2>
                                <p className="email-card-to" >Recipient: {email.to}</p>
                                <p className="email-card-msg" >Messege: {email.body}</p>
                                <p className="email-card-date" >Sent AT: {email.date}</p>
                                {email.isFocus && <EmailPreview email={email}></EmailPreview>}
                            </div>
                        )
                    })}
                </div>
            </section>
        )


    }
}