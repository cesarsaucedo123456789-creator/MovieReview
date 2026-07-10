import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">

      <h1 className="dashboard__title">
        Dashboard
      </h1>

      <p className="dashboard__subtitle">
        Bienvenido al panel administrativo de MovieReview
      </p>

      <div className="dashboard__cards">

        <div className="dashboard-card">
          <h2>Películas</h2>
          <span>120</span>
        </div>

        <div className="dashboard-card">
          <h2>Usuarios</h2>
          <span>350</span>
        </div>

        <div className="dashboard-card">
          <h2>Reseñas</h2>
          <span>890</span>
        </div>

      </div>

    </section>
  );
}

export default Dashboard;
