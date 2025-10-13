"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../data/testidata";

export default function CenterMode() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          CenterMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Apa Kata Mereka
      </h2>

      <Slider {...settings}>
        {testimonials.map((item, i) => (
          <div key={i} className="px-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 mx-2 h-[250px] flex flex-col justify-between transition-transform">
              <p className="text-gray-700 italic mb-4 leading-relaxed flex-grow">
                “{item.text}”
              </p>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
