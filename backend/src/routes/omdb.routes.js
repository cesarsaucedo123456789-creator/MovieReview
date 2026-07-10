const express = require("express");

const router = express.Router();

const { searchMovie } = require("../controllers/omdb.controller");

router.get("/search", searchMovie);

module.exports = router;
