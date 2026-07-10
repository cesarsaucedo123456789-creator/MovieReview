import "./MovieCard.css";

export default function MovieCard({

    title,
    year,
    genre,
    rating,
    image

}){

    return(

        <article className="movie-card">

            <div className="movie-card__image">

                <img
                    src={image}
                    alt={title}
                />

            </div>

            <div className="movie-card__content">

                <h3 className="movie-card__title">

                    {title}

                </h3>

                <p className="movie-card__info">

                    {year} • {genre}

                </p>

                <div className="movie-card__rating">

                    ⭐ {rating}

                </div>

                <button
                    className="movie-card__button button button--primary"
                >

                    Ver detalles

                </button>

            </div>

        </article>

    )

}