

export default class EmailDetails extends React.Component {

    state = {
        filter: {
            filterBy: '',
            search: ''
        }
    }
componentWillMount(){
    // this.props.email.isRead = true

}
    componentDidMount() {
        // this.props.email.isRead = true
    }

    render() {
        const { filterBy, search } = this.state
        var email = this.props.email
        return (

            <div className="email-card-details column flex space-between align-center fade-in" key={'fuck this'}>

                <div className="email-details-topinfo flex ">

                <p className="email-details-name">{email.name}</p>
                <p className="email-details-to" >{email.toEmail}</p>
                <p className="email-details-date" >{email.date}</p>
                </div>
                <div className="email-details-body">
                <p className="email-details-msg" > {email.body}</p>

                </div>
                <button className="email-details-back" onClick={this.props.isFocusOff}>Back</button>
            </div>



        )


    }
}