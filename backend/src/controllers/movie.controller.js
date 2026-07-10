const Movie = require("../models/Movie");

// Obtener todas las películas
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Crear película
const createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();

    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Eliminar película
const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);

    res.json({
      message: "Película eliminada",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Actualizar película
const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(updatedMovie);

  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
  updateMovie,
};
