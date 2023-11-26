import React from "react";
import Image from "next/image";
import Link from "next/link";
import StyledLinkButton from "../../StyledLinkButton";

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
          <StyledLinkButton
            href="/form"
            label="Apadrinar"
            bgColor="bg-purple-600"
            textColor="text-white"
            hoverBgColor="bg-blue-200"
            hoverTextColor="text-white-800"
          />
        </div>
      </div>
    </>
  );
};

export default ProgramBanner;
