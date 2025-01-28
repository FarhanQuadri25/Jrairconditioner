"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/JR-Ar-7.jpg",
  "/images/JR-Ar-43.jpg",
  "/images/JR-Ar-1.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden ">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Buttons with Lucide Icons */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-neutral-950" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
