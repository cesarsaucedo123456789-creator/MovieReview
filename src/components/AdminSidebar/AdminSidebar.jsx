import { Link } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">

      <h2 className="admin-sidebar__logo">
        MovieReview
      </h2>

      <nav className="admin-sidebar__menu">

        <Link to="/admin">
          Dashboard
        </Link>

        <Link to="/admin/movies">
          Películas
        </Link>

        <Link to="/admin/users">
          Usuarios
        </Link>

        <Link to="/admin/reviews">
          Reseñas
        </Link>

        <Link to="/admin/settings">
          Configuración
        </Link>

      </nav>

    </aside>
  );
}

export default AdminSidebar;
