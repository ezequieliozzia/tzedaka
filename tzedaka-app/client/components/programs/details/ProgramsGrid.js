import React from "react";
import kids from "@/public/mocks/kids";
import ProgramsCard from "./ProgramsCard";

const ProgramsGrid = ({ programs, kids, programId }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {kids.map((kid, index) => (
        <ProgramsCard
          key={`programs-card-${index}`}
          programs={programs}
          kid={kid}
          programId={programId}
        />
      ))}
    </div>
  );
};

export default ProgramsGrid;
