import "./Footer.css";

export default function Footer() {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <div className="footer__container">

                <div className="footer__brand">

                    <h2 className="footer__logo">
                        MovieReview
                    </h2>

                    <p className="footer__description">
                        Discover. Review. Share.
                    </p>

                </div>

                <div className="footer__links">

                    <a href="#">Inicio</a>
                    <a href="#">Películas</a>
                    <a href="#">Reseñas</a>
                    <a href="#">Comunidad</a>

                </div>

            </div>

            <div className="footer__bottom">

                © {year} MovieReview. Todos los derechos reservados.

            </div>

        </footer>

    );

}