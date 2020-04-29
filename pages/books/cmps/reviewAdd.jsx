import reviewService from '../services/reviewService.js'
import { eventBus } from '../services/eventBusService.js'

export default class reviews extends React.Component {
    state = {
        review: {
            bookId: this.props.bookId,
            fullName: '',
            stars: null,
            readDate: this.todayDate,
            reviewTxt: ''
        },
        prevBookId: null
    }
    componentDidMount() {
        this.setState({ prevBookId: this.props.bookId })
    }
    componentDidUpdate() {
        if (this.state.review.bookId !== this.props.bookId) {
            this.setState(prevState => {
                return {
                    review: {
                        ...prevState.review,
                        bookId: this.props.bookId
                    }
                }
            })
        }

        if (this.state.prevBookId !== this.props.bookId) {
            this.setState({ prevBookId: this.props.bookId }, () => {
                this.props.loadReviews()
            })
        }
    }
    get todayDate() {
        return new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    }
    handleInput = ({ target }) => {
        const field = target.name

        const value = (field === 'stars') ? parseInt(target.value) : target.value

        this.setState(prevState => {
            return {
                review: {
                    ...prevState.review,
                    [field]: value
                }
            }
        })
    }
    onAddReview = (ev) => {
        ev.preventDefault()
        if (!this.state.review.stars) {
            eventBus.emit('show-msg', { txt: 'Please set stars on review!' })
            return;
        }
        if (!this.state.review.fullName) this.state.review.fullName = 'Books Reader...'
        eventBus.emit('show-msg', { txt: 'Review added successfully!' })
        reviewService.addReview(this.state.review)
        this.setState({ review: { fullName: '', readDate: this.todayDate, reviewTxt: '' } })
        this.props.loadReviews()
    }
    render() {
        const { fullName, readDate, reviewTxt } = this.state.review

        return (
            <div className="add-review-container flex column">
                <h2 className="add-review-title">Add Review:</h2>

                <form className="add-review flex column align-center" onSubmit={this.onAddReview}>
                    <input type="text" placeholder="Full Name" name="fullName" value={fullName} onChange={this.handleInput} />
                    <select name="stars" onChange={this.handleInput}>
                        <option valie="">Rate here...</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                    <input type="date" name="readDate" value={readDate} onChange={this.handleInput} />
                    <textarea name="reviewTxt" className="review-txt" placeholder="Your review is here..." value={reviewTxt} onChange={this.handleInput}></textarea>
                    <button className="add-review-btn">Add Review!</button>
                </form>
            </div>
        )
    }
}