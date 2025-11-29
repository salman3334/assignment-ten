// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useAuth();

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <nav className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition">
//             HomeHero
//           </Link>
//           <div className="flex flex-wrap gap-4 items-center">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "underline font-semibold" : "hover:text-gray-200 transition"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/services"
//               className={({ isActive }) =>
//                 isActive ? "underline font-semibold" : "hover:text-gray-200 transition"
//               }
//             >
//               Services
//             </NavLink>
//             {user && (
//               <>
//                 <NavLink to="/my-services" className="hover:text-gray-200 transition">My Services</NavLink>
//                 <NavLink to="/add-service" className="hover:text-gray-200 transition">Add Service</NavLink>
//                 <NavLink to="/my-bookings" className="hover:text-gray-200 transition">My Bookings</NavLink>
//                 <NavLink to="/profile" className="hover:text-gray-200 transition">Profile</NavLink>
//               </>
//             )}
//             {!user ? (
//               <>
//                 <NavLink to="/login" className="bg-white text-blue-600 px-3 py-1 rounded shadow hover:bg-gray-100 transition">
//                   Login
//                 </NavLink>
//                 <NavLink to="/register" className="bg-white text-blue-600 px-3 py-1 rounded shadow hover:bg-gray-100 transition">
//                   Register
//                 </NavLink>
//               </>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 px-3 py-1 rounded shadow hover:bg-red-600 transition"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold hover:text-gray-200">
            HomeHero
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Services
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/my-services"
                  className={({ isActive }) =>
                    isActive ? "underline font-semibold" : "hover:underline"
                  }
                >
                  My Services
                </NavLink>
                <NavLink
                  to="/add-service"
                  className={({ isActive }) =>
                    isActive ? "underline font-semibold" : "hover:underline"
                  }
                >
                  Add Service
                </NavLink>
                <NavLink
                  to="/my-bookings"
                  className={({ isActive }) =>
                    isActive ? "underline font-semibold" : "hover:underline"
                  }
                >
                  My Bookings
                </NavLink>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "underline font-semibold" : "hover:underline"
                  }
                >
                  Profile
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "underline font-semibold" : "hover:underline"
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "underline font-semibold" : "hover:underline"
                  }
                >
                  Register
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu user={user} logout={handleLogout} />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Mobile Menu Component
const MobileMenu = ({ user, logout }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="focus:outline-none"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg py-2">
          <Link className="block px-4 py-2 hover:bg-gray-100" to="/">
            Home
          </Link>
          <Link className="block px-4 py-2 hover:bg-gray-100" to="/services">
            Services
          </Link>
          {user ? (
            <>
              <Link className="block px-4 py-2 hover:bg-gray-100" to="/my-services">
                My Services
              </Link>
              <Link className="block px-4 py-2 hover:bg-gray-100" to="/add-service">
                Add Service
              </Link>
              <Link className="block px-4 py-2 hover:bg-gray-100" to="/my-bookings">
                My Bookings
              </Link>
              <Link className="block px-4 py-2 hover:bg-gray-100" to="/profile">
                Profile
              </Link>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="block px-4 py-2 hover:bg-gray-100" to="/login">
                Login
              </Link>
              <Link className="block px-4 py-2 hover:bg-gray-100" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
