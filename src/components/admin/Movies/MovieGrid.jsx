import MovieCardAdmin from "./MovieCardAdmin";

function MovieGrid({ movies = [], onEdit = () => {}, onDelete = () => {} }) {
  return (
    <div className="admin-movie-grid">
      {movies.map((movie) => (
        <MovieCardAdmin
          key={movie.id}
          movie={movie}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default MovieGrid;
