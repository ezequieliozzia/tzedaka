import React from "react";
import Image from "next/image";
const ProgramBanner = ({ program }) => {
  return (
    <>
      <div className="h-96 relative">
        <Image
          src={program.bannerImage.src}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

        <div className="absolute flex flex-col items-center justify-center md:items-start md:justify-start">
          <div className="md:w-2/6 m-5">
            <div className="text-white font-bold text-3xl uppercase ">
              {program.programName}
            </div>
            <div className="text-white text-xl md:text-2xl my-5">
              {program.programDescription}
            </div>
            <img
              src={program.image.src} 
              className="absolute object-contain right-0 top-1/2 transform -translate-y-1/2 h-48" 
            />
          </div>
        </div>

        <div className="absolute inset-0 flex justify-center items-end my-10">
          <a
            href="#"
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-l rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Apadrinar
          </a>
        </div>
      </div>
    </>
  );
};

export default ProgramBanner;
