import { useState } from "react";
import "./MovieForm.css";

const emptyForm = {
  title: "",
  year: "",
  genre: "",
  poster: "",
  description: "",
  rating: "",
};

function MovieForm({ initialValues = {}, isEditing = false, onSubmit, onCancel }) {
  const [form, setForm] = useState({ ...emptyForm, ...initialValues });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title: form.title,
      year: Number(form.year),
      genre: form.genre,
      poster: form.poster,
      description: form.description,
      rating: Number(form.rating || 0),
    });
  };

  return (
    <div className="movie-form">
      <h2>{isEditing ? "Editar película" : "Agregar nueva película"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Nombre de la película"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="year"
          placeholder="Año de estreno"
          value={form.year}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="genre"
          placeholder="Género"
          value={form.genre}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="poster"
          placeholder="URL del poster"
          value={form.poster}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Descripción de la película"
          value={form.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={form.rating}
          onChange={handleChange}
          step="0.1"
          min="0"
          max="10"
        />

        <div className="movie-form__actions">
          <button type="submit">{isEditing ? "Actualizar película" : "Guardar película"}</button>
          <button type="button" className="movie-form__cancel" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default MovieForm;
