import SearchPreview from './SearchPreview.jsx'

export default class SearchList extends React.Component {
    render() {
        return (
            <div className="searches-container">
                {this.props.books.map((book, idx) => <SearchPreview key={idx} book={book} onAddBook={this.props.onAddBook} />)}
            </div>
        )
    }
}