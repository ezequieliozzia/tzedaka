import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://fundacintzedak.file.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0686S00000ehKbA&operationContext=DELIVERY&contentId=05T6S000025BkRX&page=0&d=/a/6S0000029Zs9/wKqTrzazXjkLWbN_7K69Engd._l32bMeE7qL06aMOIc&oid=00D6S0000003nW4&dpt=null&viewId=",
    },
    {
      url: "https://fundacintzedak.file.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0686S00000ehKb5&operationContext=DELIVERY&contentId=05T6S000025BkRS&page=0&d=/a/6S0000029ZsE/OiNQnob0ntCI8Uv1QLnGiyYsNLA9PneUDcWwcJPYnFc&oid=00D6S0000003nW4&dpt=null&viewId=",
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
      <div className="max-w-[1200px] h-[600px] w-full m-auto py-16 px-4 relative group">
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
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Carousel;
