import { Link } from "react-router-dom";
import Rating from "./Rating";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="movie-card-link"
    >
      <article className="movie-card">

        <div className="movie-image">

          <img
            src={movie.poster}
            alt={movie.title}
            className="movie-poster"
          />

          <div className="movie-overlay">

            <span className="movie-score">
              ⭐ {movie.rating}
            </span>

            <button className="details-button">
              Ver detalles
            </button>

          </div>

        </div>

        <div className="movie-info">

          <h3>{movie.title}</h3>

          <Rating value={Math.round(movie.rating / 2)} />

          <p>
            {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre} • {movie.year}
          </p>

        </div>

      </article>
    </Link>
  );
}

export default MovieCard;
