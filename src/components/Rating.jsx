function Rating({ value }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= value ? "star active" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
