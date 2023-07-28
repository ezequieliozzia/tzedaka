import { useRouter } from "next/router";
import programs from "../../../public/mocks/programs.json";

function Post() {
  const router = useRouter();
  const { programId } = router.query;

  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.60)",
          padding: "1% 1%",
          display: "flex",
          justifyContent: "center",
          fillOpacity: "0.6",
        }}
      >
        <span
          style={{
            color: "#000",
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "22px" /* 55% */,
          }}
        >
          {programs[programId].programName}
        </span>
      </div>

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.60)",
          fillOpacity: "0.6",
          padding: "1% 1%",
          display: "inline-block",
          marginTop: "2%",
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
          Acerca de {programs[programId].programName}
        </span>
      </div>
      <span
        style={{
          color: "#000",
          fontFamily: "Abhaya Libre ExtraBold",
          fontSize: "25px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "25px",
          display: "flex",
          justifyContent: "center",
          margin: "5% 2%",
        }}
      >
        {programs[programId].programDescription}
      </span>
    </div>
  );
}

export default Post;
