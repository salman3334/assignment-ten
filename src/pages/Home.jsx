
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const services = [
    {
      id: 1,
      name: "Electrician Service",
      img: "https://images.unsplash.com/photo-1581092795366-d2e3c12d99b1?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Plumbing Service",
      img: "https://images.unsplash.com/photo-1596925039111-0ffb18f21f46?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Cleaning Service",
      img: "https://images.unsplash.com/photo-1618395056762-f7f86a02ad5f?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Carpentry Service",
      img: "https://images.unsplash.com/photo-1581090700227-81b140fa0d38?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Gardening Service",
      img: "https://images.unsplash.com/photo-1595288543770-6b3d3f1dc292?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      name: "Painting Service",
      img: "https://images.unsplash.com/photo-1601160383790-2ab6f2476b40?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Slider Section */}
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
          <div key={service.id} className="bg-white shadow rounded overflow-hidden">
            <img src={service.img} alt={service.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
