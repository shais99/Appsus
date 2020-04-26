

export default class EmailPreview extends React.Component {

    state = {
        filter: {
            filterBy: '',
            search: ''
        }
    }

    componentDidMount() {
    }

    render() {
        const { filterBy, search } = this.state
        var email = this.props.email
        return (

            <div className="email-card-details flex space-between align-center" key={'fuck this'}>
                <h2 className="email-card-name">Name: {email.name}</h2>
                <p className="email-card-to" >Recipient: {email.to}</p>
                <p className="email-card-msg" >Messege: {email.body}</p>
                <p className="email-card-date" >Sent AT: {email.date}</p>
            </div>



        )


    }
}