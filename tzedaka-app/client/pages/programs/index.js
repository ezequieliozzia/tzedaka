import React from "react";
import image from "../../images/kid-transformed.png";

const programa_1 = {
  title: "Title programa 1",
  text: `Aliqua ipsum exercitation enim eu Lorem Lorem sit veniam est cupidatat amet. Pariatur consectetur tempor do sint velit ullamco proident non magna Lorem ex enim. Eu ex deserunt commodo proident esse eu dolor enim aliquip dolor reprehenderit fugiat do
Occaecat officia ex cillum mollit tempor culpa minim laboris. Veniam velit exercitation deserunt consectetur tempor nisi sunt laborum. Consectetur in veniam laboris officia qui. Tempor cillum dolore nostrud cupidatat cupidatat.`,
};

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
          style={{
            color: "#000",
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "22px",
          }}
        >
          Apadrinar un chico transforma una vida!
        </span>
      </div>
      <Card programa={programa_1} />
      <Card programa={programa_1} />
      <Card programa={programa_1} />
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
        style={{
          color: "#000",
          fontFamily: "Abhaya Libre ExtraBold",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "22px",
        }}
      >
        {programa.title}
      </span>
      <img style={{ width: "50%" }} src={image.src} alt="IMAGEN" />
      <p>{programa.text}</p>
      <a className="hiperlink" href="/">Conoce más</a>
    </div>
  );
};

export default Programs;
