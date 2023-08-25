import ProgramsGrid from "../../../components/programs/ProgramsGrid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import programs from "../../../public/mocks/programs.js";
import kids from "../../../public/mocks/kids";

const Post = () => {
  const router = useRouter();
  const [programId, setProgramId] = useState(-1);

  useEffect(() => {
    if (router.isReady) {
      setProgramId(router.query.programId);
    }
  }, [router]);

  const shouldRender = router.isReady && programId >= 0;
  return (
    shouldRender && (
      <div>
        <div className="program-container">
          <div className="program-content">
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
          <div>
            <a
              href="/apadrinar"
              style={{
                color: "#0645AD",
                fontFamily: "Abhaya Libre ExtraBold",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "22px",
                display: "flex",
                justifyContent: "center",
                margin: "6% 3%",
              }}
            >
              Sumate, apadriná un niño!
            </a>
          </div>
        </div>
        <div>
          <div>
            <span
              style={{
                display: "flex",
                justifyContent: "left",
                color: "#000",
                fontFamily: "Abhaya Libre ExtraBold",
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "22px",
                margin: "4% 3%",
              }}
            >
              Conoce a los chicos y sus historias!
            </span>
          </div>
          <ProgramsGrid programs={programs} kids={kids} programId={programId} />
          <div>
            <a
              href="/apadrinar"
              style={{
                color: "#0645AD",
                fontFamily: "Abhaya Libre ExtraBold",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "22px",
                display: "flex",
                justifyContent: "center",
                margin: "6% 3%",
              }}
            >
              Sumate, apadriná un niño!
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default Post;
