import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        form
      );

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>

        {error && (
          <p className="login__error">{error}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
