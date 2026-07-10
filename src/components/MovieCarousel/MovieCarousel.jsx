import "./MovieCarousel.css";

import MovieCard from "../MovieCard/MovieCard";

export default function MovieCarousel({ movies }) {

    return (

        <section className="movie-carousel container">

            {movies.map((movie) => (

                <MovieCard

                    key={movie.id}

                    title={movie.title}

                    year={movie.year}

                    genre={movie.genre}

                    rating={movie.rating}

                    image={movie.image}

                />

            ))}

        </section>

    );
}
