"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  message: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Morojink",
    role: "Customer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/client.jpg",
  },
  {
    name: "Alexandra",
    role: "Customer",
    message:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/client.jpg",
  },
  {
    name: "Jonathan",
    role: "Customer",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/client.jpg",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-gray-950 font-bold mb-12">Testimonial</h2>

        <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-xl shadow-md">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 relative mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h5 className="text-xl text-gray-950 font-semibold">{testimonial.name}</h5>
            <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
            <p className="text-gray-700 text-sm italic">
              “{testimonial.message}”
            </p>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === i ? "bg-black" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
