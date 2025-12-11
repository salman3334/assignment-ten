import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "../utils/axiosConfig";

const MyServices = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchMyServices = async () => {
      try {
        const res = await axios.get(`/services/my-services?email=${user.email}`);
        setServices(res.data);
      } catch (err) {
        console.log("Error loading my services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyServices();
  }, [user]);

  if (!user) {
    return (
      <div className="text-center text-xl font-semibold mt-10">
        Please login to view your added services.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center text-xl font-semibold mt-10">
        Loading your services...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Added Services</h2>

      {services.length === 0 ? (
        <div className="text-center text-lg text-gray-500">
          You haven’t added any service yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service._id} className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <p className="text-blue-600 font-bold mt-3">Price: ${service.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyServices;
