import SearchList from './SearchList.jsx'
import bookService from '../services/bookService.js'
import { eventBus } from '../services/eventBusService.js'

export default class BookAdd extends React.Component {
    state = {
        bookName: '',
        books: null
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState({ [field]: value }, () => {
            this.onSearch(this.state.bookName)
        })
    }
    onSearch = (searchBy) => {
        bookService.getGoogleBooks(searchBy)
            .then(books => this.setState({ books }))
    }
    onAddBook = (book) => {
        bookService.addBook(book)
        this.setState({ books: null })
        this.props.onAddBook()
        eventBus.emit('show-msg', { txt: book.volumeInfo.title + ' Added Successfully!', bookId: book.id })
    }
    render() {
        const { books, bookName } = this.state
        return (
            <React.Fragment>
                <section className="main-search-book flex justify-center">
                    <form className="search-book-form flex column">
                        <input type="text" autoComplete="off" className="search-book-input" name="bookName" id="search-book" value={bookName} onChange={this.handleChange} placeholder="Add book to the list..." />
                    </form>
                {books && <SearchList books={books} onAddBook={this.onAddBook} />}
                </section>

            </React.Fragment>
        )
    }
}