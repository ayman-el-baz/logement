import React, { useState, useEffect } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
    overflow: "hidden",
  };

  const slideContainerStyles = {
    display: "flex",
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  const slideStyles = {
    flex: "0 0 100%",
    height: "100%",
    transition: "opacity 0.5s ease",
    opacity: 1,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: "20px",
    width: "100%",
    zIndex: 1,
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: "#fff",
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div style={sliderStyles}>
      <div style={slideContainerStyles}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              ...slideStyles,
              backgroundImage: `url(${slide.url})`,
              marginLeft: index === 0 ? `-${currentIndex * 100}%` : undefined,
              opacity: index === currentIndex ? 1 : 0,
            }}
          />
        ))}
      </div>
      <div style={leftArrowStyles} onClick={() => goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}>
        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
        </svg>
      </div>
      <div style={rightArrowStyles} onClick={() => goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}>
        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
        </svg>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((_, index) => (
          <div
            key={index}
            style={dotStyles}
            onClick={() => goToSlide(index)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
