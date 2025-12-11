
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"; // Footer import
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Profile from "./pages/Profile"; // Profile import

// // Correct Auth Imports
// import Login from "./auth/Login";
// import Register from "./auth/Register";

// // Additional pages (optional)
// import MyServices from "./pages/MyServices";
// import AddService from "./pages/AddService";
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

//           {/* Auth */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Protected Routes */}
//           <Route
//             path="/my-services"
//             element={
//               <PrivateRoute>
//                 <MyServices />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/add-service"
//             element={
//               <PrivateRoute>
//                 <AddService />
//               </PrivateRoute>
//             }
//           />
//         </Routes>

//         <Footer /> {/* Footer added */}
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Footer import
import Home from "./pages/Home";
import Services from "./pages/Services";
import Profile from "./pages/Profile"; // Profile import
import MyBookings from "./pages/MyBookings"; // MyBookings import

// Correct Auth Imports
import Login from "./auth/Login";
import Register from "./auth/Register";

// Additional pages (optional)
import MyServices from "./pages/MyServices";
import AddService from "./pages/AddService";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-bookings"
            element={
              <PrivateRoute>
                <MyBookings />
              </PrivateRoute>
            }
          />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/my-services"
            element={
              <PrivateRoute>
                <MyServices />
              </PrivateRoute>
            }
          />

          <Route
            path="/add-service"
            element={
              <PrivateRoute>
                <AddService />
              </PrivateRoute>
            }
          />
        </Routes>

        <Footer /> {/* Footer added */}
      </Router>
    </AuthProvider>
  );
}

export default App;
