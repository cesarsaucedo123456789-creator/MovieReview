import "./Users.css";

function Users() {
  const users = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "Admin" },
    { id: 2, name: "María Gómez", email: "maria@example.com", role: "Usuario" },
    { id: 3, name: "Carlos Ruiz", email: "carlos@example.com", role: "Usuario" },
  ];

  return (
    <section className="users-admin">
      <div className="users-admin__header">
        <h1>Administrar Usuarios</h1>
      </div>

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="edit-btn">Editar</button>
                <button className="delete-btn">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Users;
