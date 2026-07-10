import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">🎬 MovieReview</Link>
      </div>

      <ul className="navbar-links">

        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/">Películas</Link>
        </li>

        <li>
          <Link to="/">Géneros</Link>
        </li>

      </ul>

      <div className="navbar-buttons">

        <Link to="/login">
          <button className="login-btn">
            Iniciar sesión
          </button>
        </Link>

        <Link to="/register">
          <button className="register-btn">
            Registrarse
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
