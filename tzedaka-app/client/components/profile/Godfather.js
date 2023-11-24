import React from "react";

const Godfather = (props) => {
  const fullName = props.mainInfo["fullName"];
  const programs = props.profileInfo["programas"];
  const godchildren = props.profileInfo["ahijados"];
  const memberShipDate = props.profileInfo["fechaMembresia"];
  const gifted = props.profileInfo["donado"];
  return (
    <div className="p-4 bg-white shadow">
      <div className="grid grid-cols-2 text-center">
        <div>
          <p className="font-bold text-gray-700 text-xl">
            {godchildren && godchildren.length}
          </p>
          <p className="text-gray-400">Ahijados</p>
        </div>
        <div>
          {programs && (
            <p className="font-bold text-gray-700 text-xl">
              {programs.join(", ")}
            </p>
          )}
          <p className="text-gray-400">Programas</p>
        </div>
      </div>
    </div>
  );
};

export default Godfather;
