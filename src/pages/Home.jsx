
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/services`) // Correct URL
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        // 6 services max
        const sixServices = data.slice(0, 6);

        // For testing, if DB empty, use placeholder
        if (sixServices.length === 0) {
          setServices([
            {
              _id: "1",
              serviceName: "Electrician Service",
              category: "Electrical",
              image:
                "https://i.postimg.cc/Gmx2wVVp/annie-spratt-v-Ggn0x-Ldy8s-unsplash.jpg",
            },
            {
              _id: "2",
              serviceName: "Plumbing Service",
              category: "Plumbing",
              image:
                "https://i.postimg.cc/nLwnnJ15/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg",
            },
            {
              _id: "3",
              serviceName: "Cleaning Service",
              category: "Cleaning",
              image:
                "https://i.postimg.cc/J0j83BWn/carlos-muza-hpj-Sk-U2UYSU-unsplash.jpg",
            },
            {
              _id: "4",
              serviceName: "Carpentry Service",
              category: "Carpentry",
              image:
                "https://i.postimg.cc/Xvh6Tgj6/marvin-meyer-SYTO3xs06f-U-unsplash.jpg",
            },
            {
              _id: "5",
              serviceName: "Gardening Service",
              category: "Gardening",
              image:
                "https://i.postimg.cc/fR2G9v0S/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg",
            },
            {
              _id: "6",
              serviceName: "Painting Service",
              category: "Painting",
              image:
                "https://i.postimg.cc/rFYjGZQS/pexels-divinetechygirl-1181677.jpg",
            },
          ]);
        } else {
          setServices(sixServices);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">

      {/* Hero Slider */}
      <Slider {...sliderSettings}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1573164574395-8535eacc9f5e?auto=format&fit=crop&w=1200&q=80"
            alt="Slide 1"
            className="w-full h-64 object-cover rounded"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581090700227-81b140fa0d38?auto=format&fit=crop&w=1200&q=80"
            alt="Slide 2"
            className="w-full h-64 object-cover rounded"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1596925039111-0ffb18f21f46?auto=format&fit=crop&w=1200&q=80"
            alt="Slide 3"
            className="w-full h-64 object-cover rounded"
          />
        </div>
      </Slider>

      {/* Services Section */}
      <h2 className="text-2xl font-bold my-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service._id}
            className="bg-white shadow rounded overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={
                service.image?.startsWith("http")
                  ? service.image
                  : "https://via.placeholder.com/400x300"
              }
              alt={service.serviceName || "Service"}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {service.serviceName || "Service Name"}
              </h3>
              <p className="text-gray-600 mt-1">
                {service.category || "Category"}
              </p>
              <div className="mt-2">
                <Link to={`/services/${service._id}`}>
                  <button className="btn btn-outline btn-primary w-full">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional Static Section */}
      <section className="my-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          We provide trusted local service providers, quick bookings, and verified professionals for your home needs.
        </p>
      </section>

    </div>
  );
};

export default Home;
