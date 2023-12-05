import React from "react";

const ProgramsCard = ({
  programs,
  kid,
  programId,
  avatars,
  index,
  indexes,
}) => {
  console.log("indexes: ", indexes);
  const pickedAvatars = avatars.filter(
    (x) =>
      x.gender === kid.gender && x.programId == programs[programId].programName
  );
  // const myIndex = indexes.filter()
  let pickedAvatar = null;
  if (kid.gender === "Hombre") {
    const maleIndexes = indexes["male"];
    pickedAvatar = maleIndexes[index];
  } else {
    const femaleIndexes = indexes["female"];
    pickedAvatar = femaleIndexes[index];
  }

  return (
    <div
      key={kid.id}
      className="relative overflow-hidden bg-violet-50 cursor-pointer rounded-xl group h-full w-full"
    >
      <div className="flex items-center flex-col mt-5">
        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out cursor-pointer absolute inset-0 bg-black/90 text-white flex items-center justify-center">
          <div>
            <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-500 ease-in-out">
              <span className="text-base w-3/4 mb-5">{kid.description}</span>
            </div>
          </div>
        </div>

        <img
          src={pickedAvatars[pickedAvatar].avatar.src}
          width="150"
          height="150"
        />

        <span className="text-center text-xl font-bold my-2 items-start">
          {kid.title}
        </span>
        <span className="text-xl mb-2 items-start">
          {programs[programId].programName}
        </span>
      </div>
    </div>
  );
};

export default ProgramsCard;
