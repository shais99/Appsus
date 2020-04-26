

export default class EmailDetails extends React.Component {

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

            <div className="email-card-details column flex space-between align-center" key={'fuck this'}>

                <div className="email-preview-topinfo flex ">

                <p className="email-preview-name">{email.name}</p>
                <p className="email-preview-to" >{email.to}</p>
                <p className="email-preview-date" >{email.date}</p>
                </div>
                <div className="email-preview-body">
                <p className="email-preview-msg" > {email.body}</p>

                </div>
                <button onClick={this.props.isFocusOff}>Back</button>
            </div>



        )


    }
}