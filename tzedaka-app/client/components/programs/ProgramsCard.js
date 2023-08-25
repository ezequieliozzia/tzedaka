import React from "react";

const ProgramsCard = ({ programs, kid, programId }) => {
  return (
    <div
      key={kid.id}
      style={{
        background: "#f0e8f3",
        padding: "2%",
        marginTop: "2%",
        flex: "0 0 calc(33.3333% - 1% - 1%)",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={kid.avatar.src} width="150" height="150" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3%",
        }}
      >
        <span
          style={{
            color: "#000",
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "22px",
          }}
        >
          {kid.name}
        </span>
        <span
          style={{
            color: "#000",
            fontFamily: "Abhaya Libre Medium",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
          }}
        >
          | {kid.title}
        </span>
      </div>
      <span
        style={{
          color: "#000",
          fontFamily: "Abhaya Libre Medium",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "22px",
          marginBottom: "6%",
          marginTop: "2%",
        }}
      >
        {programs[programId].programName}
      </span>
      <span
        style={{
          color: "#000",
          fontFamily: "Abhaya Libre Medium",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "20px",
        }}
      >
        {kid.description}
      </span>
    </div>
  );
};

export default ProgramsCard;
