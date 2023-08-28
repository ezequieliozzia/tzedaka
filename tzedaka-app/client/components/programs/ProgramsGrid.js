import React from "react";
import kids from "@/public/mocks/kids";
import ProgramsCard from "./ProgramsCard";

const ProgramsGrid = ({ programs, kids, programId }) => {
  console.log("kids = ", kids);
  return (
    <div className="grid grid-cols-3 gap-8">
      {kids.map((kid) => (
        <ProgramsCard programs={programs} kid={kid} programId={programId} />
      ))}
    </div>
  );
};

export default ProgramsGrid;
