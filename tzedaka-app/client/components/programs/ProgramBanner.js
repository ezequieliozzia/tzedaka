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

      {/* </div> */}
      {/* <div style={{ background: "black", opacity: "0.5", width: "40%" }}>
        <div className="flex flex-col text-blue">
          <p className="font-bold text-3xl uppercase m-5">
            {program.programName}
          </p>
          <p className="text-2xl mb-10 leading-none mx-5">
            {program.programDescription}
          </p>
        </div>
      </div> */}
    </>
    // <div
    //   className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
    //   style={{
    //     backgroundImage: `url(${program.bannerImage.src})`,
    //   }}
    // >
    // <div style={{ background: "black", opacity: "0.5", width: "40%" }}>
    //   <div className="flex flex-col">
    //     <p className="font-bold text-3xl uppercase m-5">
    //       {program.programName}
    //     </p>
    //     <p className="text-2xl mb-10 leading-none mx-5">
    //       {program.programDescription}
    //     </p>
    //   </div>
    // </div>
    //   <div className="flex justify-center">
    //     <a
    //       href="#"
    //       className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-l rounded hover:bg-gray-200 hover:text-gray-800"
    //     >
    //       Apadrinar
    //     </a>
    //   </div>
    // </div>
  );
};

export default ProgramBanner;
