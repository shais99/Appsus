const { Link } = ReactRouterDOM

export default function bookPreview(props) {
    const { book } = props

    function getCurrency(currency) {
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

    return (
        <Link to={`/books/${book.id}`}>
            <article className="book-preview flex column align-center">
                {/* <div className="book-preview-img"> */}
                    <img src={book.thumbnail} alt="NO IMG YET!" />
                {/* </div> */}
                <p>Book Name: {book.title}</p>
                <p>Book Price: {book.listPrice.amount}{getCurrency(book.listPrice.currencyCode)}</p>
            </article>
        </Link>
    )
}