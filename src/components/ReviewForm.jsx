import { useState } from "react";

function ReviewForm({ onAddReview }) {
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.trim() || !comment.trim()) {
      alert("Completa todos los campos.");
      return;
    }

    onAddReview({
      id: Date.now(),
      user,
      rating: Number(rating),
      comment,
    });

    setUser("");
    setRating(5);
    setComment("");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Escribir una reseña</h2>

      <input
        type="text"
        placeholder="Tu nombre"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">⭐</option>
      </select>

      <textarea
        rows="5"
        placeholder="Escribe tu opinión..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="submit">
        Publicar reseña
      </button>
    </form>
  );
}

export default ReviewForm;
