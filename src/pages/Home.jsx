// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import axios from "../utils/axiosConfig";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("/services?limit=6"); // top 6
        setServices(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchServices();
  }, []);

  return (
    <div>
      <HeroSlider />

      {/* Top 6 Services */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Top Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service._id}
              className="bg-white rounded shadow p-4 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-600 mb-2">{service.category}</p>
              <p className="font-bold mb-4">${service.price}</p>
              <Link
                to={`/service/${service._id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Details
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
