import React from "react";
// import "../styles.css";
// import slider from "./Slider.css";
import { useState } from "react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import Image from "next/image";

const Slider = () => {
  const slides = [
    { src: slide1, alt: "Slide 1" },
    { src: slide2, alt: "Slide 2" },
    { src: slide3, alt: "Slide 3" },
    { src: slide4, alt: "Slide 4" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  return (
    <div>
      <div className="image-slider my-20">
        <div
          className="slider-container"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <Image
                width={1280}
                // height={1920}
                // className="w-full h-full"
                src={slide.src}
                alt={slide.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        Previous
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;
