const express = require("express");

const router = express.Router();

const { 
  getMovies, 
  createMovie, 
  deleteMovie,
  updateMovie
} = require("../controllers/movie.controller");

// Obtener películas
router.get("/", getMovies);

// Crear película
router.post("/", createMovie);

// Eliminar película
router.delete("/:id", deleteMovie);

// Actualizar película
router.put("/:id", updateMovie);

module.exports = router;
