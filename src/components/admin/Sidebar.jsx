import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: "🏠", path: "/admin" },
    { name: "Películas", icon: "🎬", path: "/admin/movies" },
    { name: "Usuarios", icon: "👥", path: "/admin/users" },
    { name: "Reseñas", icon: "⭐", path: "/admin/reviews" },
    { name: "Configuración", icon: "⚙", path: "/admin/settings" },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <h2>🎬 MovieReview</h2>
        <span>ADMIN</span>
      </div>

      <nav>
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            <span>{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <button className="logout-btn">
        🚪 Cerrar sesión
      </button>
    </aside>
  );
}

export default Sidebar;
