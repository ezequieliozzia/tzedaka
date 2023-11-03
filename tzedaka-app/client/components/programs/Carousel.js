import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDot, RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5b7c56e255b02c683659fe43/1538160281092-VL9JSJTT5W011B8SCSEL/children-raise.png?format=1500w",
      description:
        "ABC garantiza acceso digno a educación a niños en etapa inicial y primaria, acompáñanos",
      name: "Inauguración programa ABC",
    },
    {
      url: "https://images.healthshots.com/healthshots/en/uploads/2023/04/23115552/children-1-770x436.jpg",
      description:
        "IDEA garantiza educación digna a jóvenes y adolescentes de secundaria y bachillerato",
      name: "Inauguración programa IDEA",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  console.log("slides: ", slides);

  return (
    slides.length > 0 && (
      <div className="h-[600px] w-full m-auto py-16 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              {slideIndex === currentIndex ? <RxDotFilled /> : <RxDot />}
            </div>
          ))}
        </div>
        <div className="flex font-bold justify-center items-center">
          <div className="absolute top-[67%] text-2xl bg-black/20 text-white">
            {slides[currentIndex].name}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="absolute top-[75%] text-2xl bg-black/20 text-white">
            {slides[currentIndex].description}
          </div>
        </div>
      </div>
    )
  );
};

export default Carousel;
