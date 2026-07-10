import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      id: 1,
      user: "Cesar",
      movie: "Interstellar",
      rating: 5,
      status: "Visible"
    },
    {
      id: 2,
      user: "Usuario Demo",
      movie: "Dune",
      rating: 4,
      status: "Visible"
    }
  ];

  return (
    <section className="reviews-admin">
      <h1>Administrar Reseñas</h1>

      <table className="reviews-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Película</th>
            <th>Calificación</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.user}</td>
              <td>{review.movie}</td>
              <td>{"⭐".repeat(review.rating)}</td>
              <td>{review.status}</td>
              <td>
                <button className="delete-btn">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Reviews;
