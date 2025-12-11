// import React, { useEffect, useState } from "react";
// import axios from "../utils/axiosConfig";
// import { Link } from "react-router-dom";

// const Services = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const res = await axios.get("/services");
//         setServices(res.data);
//       } catch (err) {
//         console.log("Service load error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center mt-20 text-xl font-semibold">
//         Loading Services...
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         All Available Services
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//         {services.map((service) => (
//           <div
//             key={service._id}
//             className="bg-white rounded-xl shadow-md overflow-hidden"
//           >
//             <img
//               src={service.image}
//               alt={service.name}
//               className="h-52 w-full object-cover"
//             />

//             <div className="p-5 space-y-3">
//               <h3 className="text-xl font-semibold">{service.name}</h3>
//               <p className="text-gray-600">{service.description}</p>

//               <div className="flex justify-between items-center">
//                 <span className="text-blue-600 font-bold">
//                   ${service.price}
//                 </span>

//                 <Link to={`/services/${service._id}`}>
//                   <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                     Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
import React, { useEffect, useState } from "react";
import axios from "../utils/axiosConfig"; // ensure baseURL is set
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("/services"); // backend: /api/services
        const data = Array.isArray(res.data) ? res.data : [];
        setServices(data);
      } catch (err) {
        console.error("Service load error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-center mt-20">
        <p className="text-gray-700 text-xl">No services available</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        All Available Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.image || "https://via.placeholder.com/400x300"}
              alt={service.serviceName || "Service"}
              className="h-52 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold">
                {service.serviceName || "Service Name"}
              </h3>
              <p className="text-gray-600">
                {service.category || "Category"}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">
                  ${service.price || "N/A"}
                </span>

                <Link to={`/services/${service._id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
