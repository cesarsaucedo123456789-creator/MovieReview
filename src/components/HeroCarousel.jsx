import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies";

function HeroCarousel() {
  const featuredMovies = useMemo(
    () => movies.filter((movie) => movie.featured),
    []
  );

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || featuredMovies.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused, featuredMovies.length]);

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? featuredMovies.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % featuredMovies.length);
  };

  const activeMovie = featuredMovies[current] || featuredMovies[0];

  if (!activeMovie) {
    return null;
  }

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url(${activeMovie.poster})`,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button className="hero-arrow left" onClick={handlePrev}>
        ‹
      </button>

      <button className="hero-arrow right" onClick={handleNext}>
        ›
      </button>

      <div className="hero-content">
        <h1>{activeMovie.title}</h1>
        <p>{activeMovie.description}</p>
        <Link to={`/movie/${activeMovie.id}`} className="hero-button">
          Ver detalles
        </Link>
      </div>

      <div className="hero-indicators">
        {featuredMovies.map((movie, index) => (
          <button
            key={movie.id}
            type="button"
            className={`indicator ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
