import React from "react";
import ProgramsCard from "./ProgramsCard";

const ProgramsGrid = ({ programs, kids, programId, avatars }) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-6 ">
      {kids.map((kid, index) => (
        <div className="p-2">
          <ProgramsCard
            key={`programs-card-${index}`}
            programs={programs}
            kid={kid}
            programId={programId}
            avatars={avatars}
          />
        </div>
      ))}
    </div>
  );
};

export default ProgramsGrid;
