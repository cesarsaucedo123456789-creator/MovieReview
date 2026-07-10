import Badge from "../Badge";

function MovieCardAdmin({
  movie,
  onEdit,
  onDelete,
}) {
  return (
    <article className="admin-movie-card">

      <img
        src={movie.poster}
        alt={movie.title}
      />

      <div className="admin-movie-info">

        <h2>{movie.title}</h2>

        <p>{movie.director}</p>

        <span>
          ⭐ {movie.rating}
        </span>

        <div>

          {movie.featured ? (
            <Badge text="Destacada" />
          ) : (
            <Badge
              text="Activa"
              color="#10b981"
            />
          )}

        </div>

      </div>

      <div className="movie-actions">

        <button
          onClick={() => onEdit(movie)}
        >
          ✏ Editar
        </button>

        <button
          onClick={() => onDelete(movie)}
        >
          🗑 Eliminar
        </button>

      </div>

    </article>
  );
}

export default MovieCardAdmin;
