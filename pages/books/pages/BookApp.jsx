import bookService from '../services/bookService.js'
import BookList from '../cmps/bookList.jsx'
import BookAdd from '../cmps/BookAdd.jsx'
import BookFilter from '../cmps/bookFilter.jsx'

export default class BookApp extends React.Component {
    state = {
        books: null,
        selectedBook: null,
        filterBy: null,
    }
    componentDidMount() {
        this.loadBooks()
    }
    loadBooks() {
        bookService.query(this.state.filterBy)
            .then(books => { this.setState({ books }) })
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadBooks())
    }
    onAddBook = () => {
        this.loadBooks()
    }

    render() {
        const { books } = this.state
        return (
            <section>
                <div className="search-filter-container container flex even align-center">
                    {<BookAdd onAddBook={this.onAddBook} />}
                    {<BookFilter onSetFilter={this.onSetFilter} />}
                </div>
                {books && <BookList books={books} />}
            </section>
        )
    }
}