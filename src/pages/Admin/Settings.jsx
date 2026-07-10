import "./Settings.css";

function Settings() {
  return (
    <section className="settings-admin">
      <h1>Configuración</h1>

      <div className="settings-card">
        <h2>Perfil administrador</h2>

        <p>Nombre: Administrador MovieReview</p>

        <p>Rol: Administrador</p>

        <button>Editar perfil</button>
      </div>

      <div className="settings-card">
        <h2>Seguridad</h2>

        <p>Cambiar contraseña y administrar acceso.</p>

        <button>Cambiar contraseña</button>
      </div>
    </section>
  );
}

export default Settings;
