import "./Hero.css";

export default function Hero(){

    return(

        <section className="hero">

            <div className="container hero__container">

                <div className="hero__content">

                    <span className="hero__badge">

                        🎬 MovieReview

                    </span>

                    <h1 className="hero__title">

                        Discover.
                        <br />
                        Review.
                        <br />
                        Share.

                    </h1>

                    <p className="hero__description">

                        Descubre miles de películas, comparte tus opiniones y encuentra tu próxima película favorita.

                    </p>

                    <div className="hero__buttons">

                        <button className="button button--primary">

                            Explorar

                        </button>

                        <button className="button button--secondary">

                            Crear cuenta

                        </button>

                    </div>

                </div>

                <div className="hero__movie">

                    <div className="hero-card">

                        <div className="hero-card__poster">

                            Poster

                        </div>

                        <div className="hero-card__content">

                            <h2>Interstellar</h2>

                            <p>2014 • Ciencia ficción</p>

                            <div className="hero-card__rating">

                                ⭐⭐⭐⭐⭐

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}