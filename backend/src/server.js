const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/database");
const movieRoutes = require("./routes/movie.routes");
const omdbRoutes = require("./routes/omdb.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/movies", movieRoutes);
app.use("/api/omdb", omdbRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API MovieReview funcionando");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
