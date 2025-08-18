import React, { useState, useEffect, useRef } from "react";
import slide1 from "../assets/slideshow/slide1.png";
import slide2 from "../assets/slideshow/slide2.png";
import slide3 from "../assets/slideshow/slide3.png";
import slide4 from "../assets/slideshow/slide4.png";
import slide5 from "../assets/slideshow/slide5.png";
import slide6 from "../assets/slideshow/slide6.png";
import slide7 from "../assets/slideshow/slide7.png";
import slide8 from "../assets/slideshow/slide8.png";
import slide9 from "../assets/slideshow/slide9.png";
import slide10 from "../assets/slideshow/slide10.png";
import slide11 from "../assets/slideshow/slide11.png";
import slide12 from "../assets/slideshow/slide12.png";
import slide13 from "../assets/slideshow/slide13.png";
import slide14 from "../assets/slideshow/slide14.png";
import slide15 from "../assets/slideshow/slide15.png";
import slide16 from "../assets/slideshow/slide16.png";

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide16,
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Swipe state
  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % images.length),
      3000 // 3 seconds per slide
    );
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goToSlide = (idx) => setCurrent(idx);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches.clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    const diff = startX.current - endX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left → next slide
        setCurrent((prev) => (prev + 1) % images.length);
      } else {
        // Swipe right → previous slide
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    }
    isDragging.current = false;
  };

  return (
    <div className="w-full flex justify-center pt-8 pb-4 bg-transparent">
      <div
        className="relative w-full max-w-5xl px-6 sm:px-8 lg:px-12 select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: "grab" }}
      >
        <img
          src={images[current]}
          alt={`slide ${current + 1}`}
          className="w-full h-[400px] sm:h-[420px] object-cover rounded-xl shadow-lg bg-white"
        />
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
