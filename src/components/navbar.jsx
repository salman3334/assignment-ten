import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err.message);
    }
  };

  const activeClass = "text-white bg-blue-500 rounded px-3 py-2";
  const normalClass = "text-gray-800 hover:text-blue-500 px-3 py-2";

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">HomeHero</Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? activeClass : normalClass}>Services</NavLink>

            {user && (
              <>
                <NavLink to="/my-services" className={({ isActive }) => isActive ? activeClass : normalClass}>My Services</NavLink>
                <NavLink to="/add-service" className={({ isActive }) => isActive ? activeClass : normalClass}>Add Service</NavLink>
                <NavLink to="/my-bookings" className={({ isActive }) => isActive ? activeClass : normalClass}>My Bookings</NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ? activeClass : normalClass}>Profile</NavLink>
              </>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            {!user ? (
              <>
                <Link to="/login" className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</Link>
                <Link to="/register" className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600">Register</Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
