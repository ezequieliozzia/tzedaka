import React from "react";

const ProgramsCard = ({ programs, kid, programId }) => {
  return (
    <div
      key={kid.id}
      className="flex justify-between flex-col items-center mt-5 bg-pink-card rounded-lg"
    >
      <div className="flex items-center flex-col mt-5">
        <img src={kid.avatar.src} width="150" height="150" />

        <span className="text-xl font-bold my-2 items-start">{kid.title}</span>
        <span className="text-xl mb-2 items-start">
          {programs[programId].programName}
        </span>
        <span className="text-s w-3/4 mb-5">{kid.description}</span>
      </div>
    </div>
  );
};

export default ProgramsCard;
