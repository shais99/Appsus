import ReviewPreview from '../cmps/reviewPreview.jsx'

export default function reviewList(props) {
    return (
        <React.Fragment>
            {props.reviews.map(review => <ReviewPreview key={review.id} review={review} onRemoveReview={props.onRemoveReview} />)}
        </React.Fragment>
    )
}