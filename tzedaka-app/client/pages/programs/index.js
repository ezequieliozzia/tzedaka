import React from "react";
import image from "../../images/kid-transformed.png";
import programs from "../../public/mocks/programs.json";
import { universe45Light, universe65Bold } from "../../utils/fonts";

const Programs = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "1% 2%",
          display: "inline-block",
        }}
      >
        <span
          className={`text-2xl font-semibold ${universe45Light}`}
          // style={{
          //   color: "#000",
          //   fontFamily: "Abhaya Libre ExtraBold",
          //   fontSize: "30px",
          //   fontStyle: "normal",
          //   fontWeight: "800",
          //   lineHeight: "22px",
          // }}
        >
          Apadrinar un chico transforma una vida!
        </span>
      </div>
      {programs.map((programa) => {
        return <Card key={programa.programId} programa={programa} />;
      })}
    </>
  );
};

const Card = ({ programa }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "90%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        margin: "5%",
        gap: "20px",
      }}
    >
      <span
        className={`text-2xl font-bold ${universe45Light}`}
        // style={{
        //   color: "#000",
        //   fontFamily: "Abhaya Libre ExtraBold",
        //   fontSize: "30px",
        //   fontStyle: "normal",
        //   fontWeight: "800",
        //   lineHeight: "22px",
        // }}
      >
        {programa.programName}
      </span>
      <img style={{ width: "50%" }} src={image.src} alt="IMAGEN" />
      <p className={universe45Light} style={{ margin: "0 20%" }}>
        {programa.programDescription}
      </p>
      <a className="hiperlink" href={`/programs/details/${programa.programId}`}>
        Conoce más
      </a>
    </div>
  );
};

export default Programs;
