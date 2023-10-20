import React from "react";

const ProgramsCard = ({ programs, kid, programId }) => {
  return (
    <div key={kid.id} className="overflow-hidden bg-violet-50 cursor-pointer rounded-xl relative group h-full w-full flex items-center justify-center">
      <div className="flex items-center flex-col mt-5">
        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <span className="text-s w-3/4 mb-5">{kid.description}</span>
            </div>
          </div>
        </div>

        <img src={kid.avatar.src} width="150" height="150" />

        <span className="text-xl font-bold my-2 items-start"> {kid.title} </span>
        <span className="text-xl mb-2 items-start"> {programs[programId].programName} </span>
      </div>
    </div>
  );
};

export default ProgramsCard;
