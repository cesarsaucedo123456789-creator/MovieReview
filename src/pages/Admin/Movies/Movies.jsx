import { useEffect, useState } from "react";

import MovieForm from "../../../components/MovieForm/MovieForm";
import { createMovie, deleteMovie, getMovies, updateMovie } from "../../../services/movieService";

import "./Movies.css";

function Movies() {
  const [showForm, setShowForm] = useState(false);
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const response = await getMovies();
      setMovies(response.data);
    } catch (error) {
      console.error("Error cargando películas:", error);
      setMessage("No se pudieron cargar las películas.");
    }
  };

  const handleSubmitMovie = async (movieData) => {
    try {
      if (editingMovie) {
        await updateMovie(editingMovie._id, movieData);
        setMessage("Película actualizada correctamente.");
      } else {
        await createMovie(movieData);
        setMessage("Película creada correctamente.");
      }

      await loadMovies();
      setShowForm(false);
      setEditingMovie(null);
    } catch (error) {
      console.error("Error guardando película:", error);
      setMessage("No se pudo guardar la película.");
    }
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta película?")) return;

    try {
      await deleteMovie(id);
      await loadMovies();
      setMessage("Película eliminada.");
    } catch (error) {
      console.error("Error eliminando película:", error);
      setMessage("No se pudo eliminar la película.");
    }
  };

  const handleOpenForm = () => {
    setEditingMovie(null);
    setShowForm(true);
  };

  return (
    <section className="movies-admin">
      <div className="movies-admin__header">
        <h1>Administrar Películas</h1>

        <button onClick={showForm ? () => {
          setShowForm(false);
          setEditingMovie(null);
        } : handleOpenForm}>
          {showForm ? "Cerrar formulario" : "+ Agregar película"}
        </button>
      </div>

      {message && <p className="movies-admin__message">{message}</p>}

      {showForm && (
        <MovieForm
          initialValues={editingMovie || {}}
          isEditing={Boolean(editingMovie)}
          onSubmit={handleSubmitMovie}
          onCancel={() => {
            setShowForm(false);
            setEditingMovie(null);
          }}
        />
      )}

      <table className="movies-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Película</th>
            <th>Año</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie._id}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(movie)}>Editar</button>
                <button className="delete-btn" onClick={() => handleDelete(movie._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Movies;
