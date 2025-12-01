import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={service.imageURL}
        alt={service.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
      <p className="text-gray-600 mb-2">{service.description}</p>
      <p className="font-bold mb-2">${service.price}</p>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Explore
      </button>
    </div>
  );
};

export default ServiceCard;
