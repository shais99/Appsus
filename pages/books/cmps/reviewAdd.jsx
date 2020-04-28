import reviewService from '../services/reviewService.js'
import ReviewList from './reviewList.jsx'

export default class reviews extends React.Component {
    state = {
        reviews: null,
        review: {
            bookId: this.props.bookId,
            fullName: '',
            stars: 1,
            readDate: this.todayDate,
            reviewTxt: ''
        },
        prevBookId: null
    }
    componentDidMount() {
        this.loadReviews()
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
                this.loadReviews()
            })
        }
    }
    get todayDate() {
        return new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    }
    loadReviews() {
        const bookId = this.props.bookId

        reviewService.query(bookId)
            .then(reviews => { this.setState({ reviews }) })
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
        reviewService.addReview(this.state.review)
        this.loadReviews()
    }
    onRemoveReview = (reviewId) => {
        reviewService.remove(reviewId)
            .then(() => { this.loadReviews() })
    }
    render() {
        const { fullName, readDate, reviewTxt } = this.state.review
        const loading = <p>Loading...</p>

        return ((!this.state.reviews) ? loading :
            <div className="add-review-container flex column">
                <h2 className="add-review-title">Add Review:</h2>
                <ReviewList reviews={this.state.reviews} onRemoveReview={this.onRemoveReview} />

                <form className="add-review flex column align-center" onSubmit={this.onAddReview}>
                    <input type="text" placeholder="Full Name" name="fullName" value={fullName} onChange={this.handleInput} />
                    <select name="stars" onChange={this.handleInput}>
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