const { Link } = ReactRouterDOM
import { eventBus } from '../services/eventBusService.js'

export default class UserMsg extends React.Component {
    state = { msg: null, bookId: null }

    componentDidMount() {
        this.unsubscribeFromEventBus = eventBus.on('show-msg', (msg, bookId) => {
            const delay = 3000;
            this.setState({ msg, bookId })
            setTimeout(() => {
                this.setState({ msg: null, bookId: null })
            }, delay)
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromEventBus();
    }
    render() {
        const { msg, bookId } = this.state
        return (!msg && !bookId) ? '' : <section className="user-msg">
            <button onClick={() => {
                this.setState({ msg: null, bookId: null })
            }}>x</button>
            <Link to={`/books/${msg.bookId}`} target="_blank">{msg.txt}, Check It Out!</Link>
        </section >
    }
}