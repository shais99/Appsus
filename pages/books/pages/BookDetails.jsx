import bookService from "../services/bookService.js"
import LongTxt from '../cmps/longTxt.jsx'
import ReviewAdd from '../cmps/reviewAdd.jsx'
const { Link } = ReactRouterDOM
const history = History.createBrowserHistory()

export default class BookDetails extends React.Component {
    state = {
        book: null
    }
    componentDidMount() {
        this.prevNext = bookService.getNextPrevBooks(this.props.match.params.theBookId);
        this.loadBook()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.theBookId !== this.props.match.params.theBookId) {
            this.loadBook();
        }
        this.prevNext = bookService.getNextPrevBooks(this.props.match.params.theBookId);
    }
    loadBook() {
        const id = this.props.match.params.theBookId
        bookService.getById(id)
            .then(book => {
                this.setState({ book })
            })
    }
    loadReviews() {
        const bookId = this.state.review.bookId
        reviewService.query(bookId)
            .then(reviews => { this.setState({ reviews }) })
    }
    getPageCountMsg = (pageCount) => {
        let pageCountMsg = '';
        if (pageCount > 500) pageCountMsg = 'Long Reading';
        else if (pageCount > 200) pageCountMsg = 'Decent Reading';
        else if (pageCount < 100) pageCountMsg = 'Light Reading';
        else pageCountMsg = 'Nice Reading!';

        return pageCountMsg
    }
    getPublishedMsg = (year) => {
        const thisYear = new Date().getFullYear();
        if (thisYear - year > 10) return 'Veteran';
        else return 'New'
    }
    getCurrencySign = (currency) => {
        let currSign = '';
        switch (currency) {
            case 'USD':
                currSign = '$'
                break;
            case 'ILS':
                currSign = '₪'
                break;
            case 'EUR':
                currSign = '€'
                break;
        }
        return currSign
    }
    getPriceClass = (price) => {
        if (price > 150) return 'red'
        else if (price < 20) return 'green'
        else return 'blue';
    }
    getSaleMSg = (isOnSale) => {
        if (!isOnSale) return
        else return 'The Book is On Sale!'
    }

    render() {
        const { book } = this.state
        const loading = <p>Loading...</p>

        return ((!book) ? loading :
            <div>
                <div className="book-title flex align-center space-between">
                    {book.title}
                    <button className="back-btn" onClick={() => {
                        history.goBack();
                    }}>Back</button>
                </div>
                <h4 className="book-sub-title">{book.subtitle}</h4>
                <div className="container">
                    <div className="book-content flex">
                        <div className="book-img">
                            <img src={book.thumbnail} alt="" />
                        </div>
                        <div className="book-details">
                            <p>Published Date: {book.publishedDate}</p>
                            <p>Page Count: {book.pageCount} - <span className="bold">{this.getPageCountMsg(book.pageCount)}</span> Book</p>
                            <p>Published: The Book is <span className="bold">{this.getPublishedMsg(book.publishedDate)}</span> Book</p>
                            <p>Book Price:
                        <span className={this.getPriceClass(book.listPrice.amount)}>
                                    {book.listPrice.amount}{this.getCurrencySign(book.listPrice.currencyCode)}
                                </span>
                            </p>
                            {this.getSaleMSg(book.listPrice.isOnSale)}
                            <p className="book-content-desc">
                                Description: <LongTxt text={book.description} />
                            </p>
                        </div>
                    </div>
                    <div className="prev-next">
                        
                        <Link className="nav-books" to={`/books/${this.prevNext.prevId}`}>Prev Book</Link>
                        <Link className="nav-books" to={`/books/${this.prevNext.nextId}`}>Next Book</Link>
                    </div>
                </div>
                <h2 className="reviews-title">Reviews:</h2>
                <ReviewAdd bookId={book.id} />
            </div>
        )
    }
}