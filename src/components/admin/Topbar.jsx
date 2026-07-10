function Topbar() {
  return (
    <header className="admin-topbar">

      <div>
        <h1>Panel de Administración</h1>
        <p>Gestiona MovieReview</p>
      </div>

      <div className="admin-user">
        <div className="avatar">
          EC
        </div>

        <div>
          <strong>Eduardo</strong>
          <p>Administrador</p>
        </div>

      </div>

    </header>
  );
}

export default Topbar;
