const axios = require("axios");

const searchMovie = async (req, res) => {
  try {
    const { title } = req.query;

    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: process.env.OMDB_API_KEY,
        t: title,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error al consultar OMDb",
    });
  }
};

module.exports = {
  searchMovie,
};
