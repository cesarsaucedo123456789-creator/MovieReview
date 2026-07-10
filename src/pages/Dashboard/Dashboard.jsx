import "./Dashboard.css";
import { useEffect, useState } from "react";
import { createMovie, getMovies } from "../../../services/movieService";
import { searchMovie } from "../../../services/omdbService";

export default function Dashboard(){

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {

        loadMovies();

    }, []);


    const loadMovies = async () => {

        try {

            const response = await getMovies();

            setMovies(response.data);

        } catch(error){

            console.error("Error cargando películas:", error);

        }

    };

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchTerm.trim()) {
            setMessage("Escribe el nombre de una película.");
            return;
        }

        try {
            const response = await searchMovie(searchTerm);

            if (response.data.Response === "False") {
                setSelectedMovie(null);
                setMessage("No se encontró la película en OMDb.");
                return;
            }

            const omdbMovie = response.data;

            const movieData = {
                title: omdbMovie.Title,
                year: Number(omdbMovie.Year?.match(/\d{4}/)?.[0] || 0),
                genre: omdbMovie.Genre?.split(",")[0]?.trim() || "Sin género",
                poster: omdbMovie.Poster && omdbMovie.Poster !== "N/A" ? omdbMovie.Poster : "",
                description: omdbMovie.Plot && omdbMovie.Plot !== "N/A" ? omdbMovie.Plot : "Sin descripción disponible.",
                rating: omdbMovie.imdbRating && omdbMovie.imdbRating !== "N/A" ? Number(omdbMovie.imdbRating) : 0,
            };

            setSelectedMovie(movieData);
            setMessage(`Se encontró: ${movieData.title}`);

        } catch(error){
            console.error("Error buscando película en OMDb:", error);
            setMessage("No se pudo consultar OMDb.");
        }
    };

    const handleSaveMovie = async () => {
        if (!selectedMovie) return;

        try {
            const response = await createMovie(selectedMovie);

            setMovies((prev) => [response.data, ...prev]);
            setMessage(`"${selectedMovie.title}" guardada correctamente.`);
            setSelectedMovie(null);
            setSearchTerm("");

        } catch(error){
            console.error("Error guardando película:", error);
            setMessage("No se pudo guardar la película en la base de datos.");
        }
    };

    return(

        <div className="dashboard">

            <aside className="dashboard__sidebar">

                <h2>MovieReview</h2>

                <ul>

                    <li> Dashboard</li>

                    <li> Películas</li>

                    <li> Reseñas</li>

                    <li> Usuarios</li>

                    <li> Configuración</li>

                </ul>

            </aside>

            <main className="dashboard__content">

                <h1>

                    Panel de Administración

                </h1>

                <section className="dashboard__movies">

                    <div className="dashboard__search-box">
                        <h2>🎬 Buscar película en OMDb</h2>

                        <form onSubmit={handleSearch} className="dashboard__search-form">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Escribe un título"
                            />
                            <button type="submit">Buscar</button>
                        </form>

                        {message && <p className="dashboard__message">{message}</p>}

                        {selectedMovie && (
                            <div className="dashboard__preview">
                                <div>
                                    {selectedMovie.poster && (
                                        <img src={selectedMovie.poster} alt={selectedMovie.title} className="dashboard__poster" />
                                    )}
                                </div>

                                <div className="dashboard__preview-info">
                                    <h3>{selectedMovie.title}</h3>
                                    <p><strong>Año:</strong> {selectedMovie.year}</p>
                                    <p><strong>Género:</strong> {selectedMovie.genre}</p>
                                    <p><strong>Rating:</strong> ⭐ {selectedMovie.rating}</p>
                                    <p>{selectedMovie.description}</p>
                                    <button onClick={handleSaveMovie} className="dashboard__save-btn">Guardar en la base de datos</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <h2>🎬 Películas</h2>

                    <table>

                        <thead>

                            <tr>
                                <th>Título</th>
                                <th>Año</th>
                                <th>Género</th>
                                <th>Rating</th>
                            </tr>

                        </thead>


                        <tbody>

                            {movies.map((movie)=>(

                                <tr key={movie._id}>

                                    <td>{movie.title}</td>

                                    <td>{movie.year}</td>

                                    <td>{movie.genre}</td>

                                    <td>⭐ {movie.rating}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </section>

            </main>

        </div>

    )
}
