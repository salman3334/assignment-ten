import React, { useState } from "react";
import axios from "../utils/axiosConfig";
import { useAuth } from "../context/AuthContext";

const AddService = () => {
  const { user, token } = useAuth();
  const [form, setForm] = useState({
    serviceName: "",
    category: "",
    price: "",
    description: "",
    image: "",
    providerEmail: user?.email || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/services", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Service added successfully!");
    } catch (err) {
      console.log(err);
      alert("Failed to add service");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="serviceName"
          placeholder="Service Name"
          value={form.serviceName}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
