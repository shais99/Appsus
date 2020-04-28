import BookPreview from '../cmps/bookPreview.jsx'

export default function bookList(props) {
    return (
        <div className="books-list flex wrap justify-center">
            {props.books.map(book => <BookPreview key={book.id} book={book} />)}
        </div>
    )
}