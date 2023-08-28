import React from "react";

const ProgramBanner = ({ program }) => {
  return (
    <div
      className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
      style={{
        backgroundImage: `url(${program.bannerImage.src})`,
      }}
    >
      <div style={{ background: "black", opacity: "0.5", width: "40%" }}>
        <div className="flex flex-col">
          <p className="font-bold text-3xl uppercase m-5">
            {program.programName}
          </p>
          <p className="text-2xl mb-10 leading-none mx-5">
            {program.programDescription}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="#"
          className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-l rounded hover:bg-gray-200 hover:text-gray-800"
        >
          Apadrinar
        </a>
      </div>
    </div>
  );
};

export default ProgramBanner;
