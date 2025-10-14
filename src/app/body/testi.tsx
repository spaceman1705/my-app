"use client";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../data/testidata";

export default function CenterMode() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2 mt-6">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full transition-all duration-300 hover:bg-gray-600"></div>
    ),
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Apa Kata Mereka</h2>

        <Slider {...settings}>
          {testimonials.map((item, i) => (
            <div key={i} className="px-2 sm:px-4">
              <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col justify-between">
                <p className="text-gray-600 italic mb-4 text-base sm:text-lg line-clamp-4">
                  “{item.text}”
                </p>
                <div className="mt-auto text-left">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
