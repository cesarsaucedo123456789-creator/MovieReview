import { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import SectionTitle from "../components/SectionTitle";
import MovieRow from "../components/MovieRow";
import movies from "../data/movies";

function Home() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const trending = movies.slice(0, 6);

  const topRated = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const sciFi = movies.filter(
    (movie) => movie.genre === "Ciencia ficción"
  );

  return (
    <>
      <HeroCarousel />

      <section className="movies-section">
        <h2>Películas populares</h2>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <SectionTitle
          icon="🔥"
          title="Tendencias"
        />

        <MovieRow movies={trending} />

        <SectionTitle
          icon="⭐"
          title="Mejor calificadas"
        />

        <MovieRow movies={topRated} />

        <SectionTitle
          icon="🚀"
          title="Ciencia ficción"
        />

        <MovieRow movies={sciFi} />

        <SectionTitle
          icon="🎬"
          title="Todas las películas"
        />

        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
