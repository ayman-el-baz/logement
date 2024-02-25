import React from 'react'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function SliderPicture() {
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
          right: "32px",
          fontSize: "45px",
          color: "#fff",
          zIndex: 1,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
        </svg>
      </div>
    );
  };
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
          left: "32px",
          fontSize: "45px",
          color: "#fff",
          zIndex: 1,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
        </svg>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <Link to="">
          <img src="photos/motorclime.jpg" alt="" />
        </Link>
        <Link to="">
        <img src="photos/clime.png" alt="" />
        </Link>
        <Link to="">
        <img src="photos/clime-2.jpg" alt="" />
        </Link>
      </Slider>
    </div>
  )
}
