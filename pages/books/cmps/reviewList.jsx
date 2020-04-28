import ReviewPreview from '../cmps/reviewPreview.jsx'

export default function reviewList(props) {
    return (
        <div className="reviews-container flex wrap">
            {props.reviews.map(review => <ReviewPreview key={review.id} review={review} onRemoveReview={props.onRemoveReview} />)}
        </div>
    )
}