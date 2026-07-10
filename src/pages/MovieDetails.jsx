import { useState } from "react";
import { useParams } from "react-router-dom";
import movies from "../data/movies";
import reviews from "../data/reviews";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return <h1>Película no encontrada</h1>;
  }

  const initialReviews = reviews.filter(
    (review) => review.movieId === movie.id
  );

  const [movieReviews, setMovieReviews] = useState(initialReviews);

  const handleAddReview = (review) => {
    setMovieReviews([
      ...movieReviews,
      {
        ...review,
        movieId: movie.id,
      },
    ]);
  };

  return (
    <div className="movie-details">

      <img
        src={movie.poster}
        alt={movie.title}
        className="details-poster"
      />

      <div className="details-info">

        <h1>{movie.title}</h1>

        <p><strong>Año:</strong> {movie.year}</p>

        <p><strong>Calificación:</strong> ⭐ {movie.rating}</p>

        <div className="genres">
          {movie.genre.map((item) => (
            <span key={item} className="genre-chip">
              {item}
            </span>
          ))}
        </div>

        <a
          href={movie.trailer}
          target="_blank"
          rel="noreferrer"
          className="trailer-button"
        >
          ▶ Ver tráiler
        </a>

        <p>
          {movie.description}
        </p>

        <h3>Director</h3>
        <p>{movie.director}</p>

        <h3>Duración</h3>
        <p>{movie.duration}</p>

        <h3>Reparto</h3>

        <ul className="cast-list">
          {movie.cast.map((actor) => (
            <li key={actor}>{actor}</li>
          ))}
        </ul>

        <ReviewForm onAddReview={handleAddReview} />

        <hr />

        <h2>Reseñas</h2>

        {movieReviews.length > 0 ? (
          movieReviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))
        ) : (
          <p>Esta película todavía no tiene reseñas.</p>
        )}

      </div>

    </div>
  );
}

export default MovieDetails;
