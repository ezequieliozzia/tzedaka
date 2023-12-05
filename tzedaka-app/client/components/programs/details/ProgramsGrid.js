import React from "react";
import ProgramsCard from "./ProgramsCard";

const ProgramsGrid = ({ programs, kids, programId, avatars }) => {
  const getMaleIndexes = (kidsArray, targetGender) => {
    let count = 0;
    const result = {};
    kidsArray.forEach((kid, index) => {
      if (kid.gender === targetGender) {
        result[index] = count;
        count++;
      }
    });
    return result;
  };

  const maleIndexes = getMaleIndexes(kids, "Hombre");
  const femaleIndexes = getMaleIndexes(kids, "Mujer");

  const indexes = {
    male: maleIndexes,
    female: femaleIndexes,
  };

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
            index={index}
            indexes={indexes}
          />
        </div>
      ))}
    </div>
  );
};

export default ProgramsGrid;
