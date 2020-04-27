import { eventBus } from '../services/eventBusService.js'

export default class UserMsg extends React.Component {
    state = { msg: null, mainClass: 'fade-in' }

    componentDidMount() {
        this.unsubscribeFromEventBus = eventBus.on('show-msg', msg => {
            const mainDelay = 6000;
            const fadeDelay = 4000;
            this.setState({ msg, mainClass: 'fade-in' })
            setTimeout(() => {
                this.setState({ mainClass: 'fade-out' })
            }, fadeDelay)
            setTimeout(() => {
                this.setState({ msg: null })
            }, mainDelay)
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromEventBus();
    }
    render() {
        const { msg, mainClass } = this.state
        return (!msg) ? '' : <section className={`${mainClass} user-msg`}>
            <button onClick={() => {
                this.setState({ msg: null })
            }}>x</button>
            {msg.txt}
        </section >
    }
}