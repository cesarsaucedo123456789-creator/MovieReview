import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      await axios.post(
        "http://localhost:5000/api/users/register",
        form
      );

      setSuccess("Usuario registrado correctamente.");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Ocurrió un error al registrar el usuario."
      );
    }
  };

  return (
    <div className="register">

      <form
        className="register__form"
        onSubmit={handleSubmit}
      >

        <h1>Crear cuenta</h1>

        {error && (
          <p className="register__error">
            {error}
          </p>
        )}

        {success && (
          <p className="register__success">
            {success}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />

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
          Registrarse
        </button>

      </form>

    </div>
  );
}

export default Register;
