import Rating from "./Rating";

function ReviewCard({ review }) {
  return (
    <div className="review-card">

      <h3>{review.user}</h3>

      <Rating value={review.rating} />

      <p>{review.comment}</p>

    </div>
  );
}

export default ReviewCard;
