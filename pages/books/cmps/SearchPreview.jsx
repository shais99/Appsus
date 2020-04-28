export default function SearchPreview(props) {
    return (
        <div className="single-search flex space-between align-center">
            <span>{props.book.volumeInfo.title}</span>
            <button className="add-book" onClick={() => props.onAddBook(props.book)}>Add</button>
        </div>
    )
}