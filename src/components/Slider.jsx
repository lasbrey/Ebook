// Carousel.js

import React, { useState, useEffect } from 'react';

const Carousel = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          } transition-opacity duration-500 absolute top-0 left-0 w-full h-full`}
        >
          <img
            src={ process.env.PUBLIC_URL + slide.image}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
