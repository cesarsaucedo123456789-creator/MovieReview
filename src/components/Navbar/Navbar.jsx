import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUserCircle, FaFilm } from "react-icons/fa";

export default function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <FaFilm className="navbar__logo-icon" />
        <span className="navbar__logo-text">MovieReview</span>
      </div>

      <nav className="navbar__navigation">
        <Link className="navbar__link" to="/">
          Inicio
        </Link>
        <Link className="navbar__link" to="/movies">
          Películas
        </Link>
        <Link className="navbar__link" to="/reviews">
          Reseñas
        </Link>
        <Link className="navbar__link" to="/community">
          Comunidad
        </Link>
        <Link className="navbar__link" to="/about">
          Acerca de
        </Link>
      </nav>

      <div className="navbar__actions">

        <button
          className="navbar__search"
          type="button"
          aria-label="Buscar"
        >
          <FaSearch />
        </button>

        {!user ? (

          <Link
            to="/login"
            className="navbar__login"
          >
            <FaUserCircle />
            <span>Iniciar sesión</span>
          </Link>

        ) : (

          <div className="navbar__user">

            <span className="navbar__username">
              Hola, {user.name}
            </span>

            {user.role === "admin" && (

              <Link
                to="/admin"
                className="navbar__login"
              >
                Panel Admin
              </Link>

            )}

            <button
              onClick={handleLogout}
              className="navbar__logout"
            >
              Cerrar sesión
            </button>

          </div>

        )}

      </div>
    </header>
  );
}