import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold hover:text-yellow-300 transition">
          <Link to="/">HomeHero</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <ul className={`md:flex md:items-center md:gap-6 absolute md:static bg-blue-600 md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ${open ? "top-16 p-4" : "top-[-490px]"}`}>
          <li className="my-2 md:my-0"><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
          <li className="my-2 md:my-0"><Link to="/services" className="hover:text-yellow-300 transition">Services</Link></li>

          {user && (
            <>
              <li className="my-2 md:my-0"><Link to="/my-services" className="hover:text-yellow-300 transition">My Services</Link></li>
              <li className="my-2 md:my-0"><Link to="/add-service" className="hover:text-yellow-300 transition">Add Service</Link></li>
              <li className="my-2 md:my-0"><Link to="/my-bookings" className="hover:text-yellow-300 transition">My Bookings</Link></li>
              <li className="my-2 md:my-0"><Link to="/profile" className="hover:text-yellow-300 transition">Profile</Link></li>
            </>
          )}

          {!user ? (
            <>
              <li className="my-2 md:my-0"><Link to="/login" className="btn btn-outline btn-sm">Login</Link></li>
              <li className="my-2 md:my-0"><Link to="/register" className="btn btn-outline btn-sm">Register</Link></li>
            </>
          ) : (
            <li className="my-2 md:my-0">
              <button onClick={logout} className="btn btn-outline btn-sm">Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
 