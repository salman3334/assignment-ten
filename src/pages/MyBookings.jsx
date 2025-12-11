// import React, { useEffect, useState } from "react";
// import axios from "../utils/axiosConfig"; // Axios instance with base URL
// import { useAuth } from "../context/AuthContext";

// const MyBookings = () => {
//   const { token } = useAuth(); // user token
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await axios.get("/bookings/my", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setBookings(res.data);
//       } catch (err) {
//         console.error("Error fetching bookings:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (token) fetchBookings();
//   }, [token]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <span className="loading loading-spinner loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   if (bookings.length === 0) {
//     return (
//       <div className="text-center mt-20 text-xl font-semibold">
//         No bookings found.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold text-center mb-10">My Bookings</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//         {bookings.map((booking) => (
//           <div
//             key={booking._id}
//             className="bg-white shadow rounded-xl overflow-hidden"
//           >
//             <img
//               src={booking.service.image || "https://via.placeholder.com/400x300"}
//               alt={booking.service.serviceName}
//               className="h-52 w-full object-cover"
//             />
//             <div className="p-5 space-y-2">
//               <h3 className="text-xl font-semibold">
//                 {booking.service.serviceName}
//               </h3>
//               <p className="text-gray-600">{booking.service.category}</p>
//               <p className="text-gray-600">
//                 Date: {new Date(booking.date).toLocaleDateString()}
//               </p>
//               <p className="text-gray-600">
//                 Status: {booking.status || "Pending"}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyBookings;
// src/pages/MyBookings.jsx
import React, { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";
import { useAuth } from "../context/AuthContext";

const MyBookings = () => {
  const { user, token } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !token) return;

    const fetchBookings = async () => {
      try {
        const res = await axios.get("/bookings", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user, token]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        No bookings found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">My Bookings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={booking.serviceImage || "https://via.placeholder.com/400x300"}
              alt={booking.serviceName}
              className="h-52 w-full object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">{booking.serviceName}</h3>
              <p className="text-gray-600">Price: ${booking.price}</p>
              <p className="text-gray-600">
                Date: {new Date(booking.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
