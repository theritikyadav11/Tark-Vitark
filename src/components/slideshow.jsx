import React, { useState, useEffect, useRef } from "react";

// Reference images by static path in public folder
const images = [
  "/assets/slideshow/slide1.png",
  "/assets/slideshow/slide2.png",
  "/assets/slideshow/slide3.png",
  "/assets/slideshow/slide4.png",
  "/assets/slideshow/slide5.png",
  "/assets/slideshow/slide6.png",
  "/assets/slideshow/slide7.png",
  "/assets/slideshow/slide8.png",
  "/assets/slideshow/slide9.png",
  "/assets/slideshow/slide10.png",
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % images.length),
      2000
    );
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const goToSlide = (idx) => setCurrent(idx);

  return (
    <div className="w-full flex justify-center pt-8 pb-4 bg-transparent">
      <div className="relative w-full max-w-5xl px-6 sm:px-8 lg:px-12">
        <img
          src={images[current]}
          alt={`slide ${current + 1}`}
          className="w-full h-[400px] sm:h-[420px] object-cover rounded-xl shadow-lg bg-white"
        />
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 -translate-y-1/2 bg-gray-900/80 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-800 transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 -translate-y-1/2 bg-gray-900/80 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-800 transition"
          aria-label="Next slide"
        >
          &#8594;
        </button>
        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === idx ? "bg-red-700" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
