import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

// Públicas
import Home from "../pages/public/Home";
import MovieDetails from "../pages/public/MovieDetails";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

// Admin
import Dashboard from "../pages/Dashboard/Dashboard";
import Movies from "../pages/admin/Movies/Movies";
import Users from "../pages/admin/Users";
import Reviews from "../pages/admin/Reviews";
import Settings from "../pages/admin/Settings";

function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        {/* PUBLIC */}

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route
            path="/movie/:id"
            element={<MovieDetails />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

        </Route>

        {/* ADMIN */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="movies"
            element={<Movies />}
          />

          <Route
            path="users"
            element={<Users />}
          />

          <Route
            path="reviews"
            element={<Reviews />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;
