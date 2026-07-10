import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin/Admin";
import Movie from "./pages/Movie/Movie";
import Profile from "./pages/Profile/Profile";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/admin" element={<Admin />} />

      <Route path="/movie/:id" element={<Movie />} />

      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}
