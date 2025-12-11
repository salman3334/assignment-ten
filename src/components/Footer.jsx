import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">HomeHero</h3>
          <p className="text-gray-400">
            Trusted local service providers at your fingertips. Quick bookings, verified professionals, and seamless experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-500">Services</Link>
            </li>
            <li>
              <Link to="/my-services" className="hover:text-blue-500">My Services</Link>
            </li>
            <li>
              <Link to="/add-service" className="hover:text-blue-500">Add Service</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} HomeHero. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
