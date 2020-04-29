
// Unfinished Feature
export default class UnFinishedEmails extends React.Component {

    state = {

        email: {
            name: '',

        }
    }

    componentDidMount() {
        this.setState({ email: this.props.email })
    }
    render() {
        const { email } = this.state
        return (
            <section onClick={(event) => { this.props.onReplay(event,email) }} className="unFinishedEmail-container">
                <p>New Message</p>
                <p>{email.name}</p>
            </section>

        )
    }
}