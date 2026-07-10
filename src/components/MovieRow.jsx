import { useRef } from "react";
import MovieCard from "./MovieCard";

function MovieRow({ movies }) {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -900,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: 900,
      behavior: "smooth",
    });
  };

  return (
    <div className="movie-row-wrapper">

      <button
        className="row-button left"
        onClick={scrollLeft}
      >
        ❮
      </button>

      <div
        className="movie-row"
        ref={rowRef}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

      <button
        className="row-button right"
        onClick={scrollRight}
      >
        ❯
      </button>

    </div>
  );
}

export default MovieRow;
