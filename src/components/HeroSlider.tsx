"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  title: string;
  text: string;
  img: string;
};

const slides: Slide[] = [
  {
    title: "Stylish Watches",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis...",
    img: "/images/slider-bg.jpg",
  },
  {
    title: "Elegant Timepieces",
    text: "Nostrum sint doloribus inventore, fugiat rerum at. Incidunt sed adipisci, voluptate ab.",
    img: "/images/slider-bg.jpg",
  },
  {
    title: "Luxury on Your Wrist",
    text: "Voluptatibus quidem placeat fugit pariatur molestiae, necessitatibus perspiciatis labore recusandae.",
    img: "/images/slider-bg.jpg",
  },
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-6 lg:px-20 text-white max-w-xl">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="mb-6">{slide.text}</p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
                >
                  Contact Us
                </a>
                <a
                  href="#about"
                  className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
