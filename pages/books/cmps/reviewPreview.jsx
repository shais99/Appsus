export default class reviewPreview extends React.Component {

    render() {
        const review = this.props.review
        return (
            <div className="single-review">
                <div className="review-name">{review.fullName} <button className="delete-review" onClick={() => {this.props.onRemoveReview(review.id)}}>X</button></div>
                <p>Stars: {review.stars}</p>
                <p>Date: {review.readDate}</p>
                <p>{review.reviewTxt}</p>
            </div>
        )
    }
}