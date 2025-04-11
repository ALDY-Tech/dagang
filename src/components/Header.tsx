"use client";

import Link from "next/link";
import { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          HandTime
        </Link>

        {/* Toggle button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="#products"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            href="#testimonials"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Testimonial
          </Link>
          <Link
            href="#contact"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Contact Us
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden lg:flex space-x-4 ml-4">
          <Link href="/">
            <FaUser className="text-gray-700 hover:text-blue-600" />
          </Link>
          <Link href="/">
            <FaShoppingCart className="text-gray-700 hover:text-blue-600" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
