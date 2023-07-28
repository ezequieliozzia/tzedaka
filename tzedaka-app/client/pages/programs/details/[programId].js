import { useRouter } from "next/router";
import programs from "../../../public/mocks/programs.json";

const kids = [
  {
    avatar: "Some",
    name: "Juan",
    title: "El pequeño futbolista",
    description:
      "Cupidatat aliquip dolore eu deserunt laborum esse veniam non non nulla nisi ea. Cillum Lorem cillum mollit do elit ipsum est nostrud ad consequat commodo tempor. Officia aliquip id aliqua sunt nostrud laboris excepteur eu cillum est esse. Fugiat consectetur laborum aliqua culpa in amet aute. Elit ex ullamco duis ut laboris enim officia officia adipisicing et. Voluptate do in fugiat eiusmod veniam ex culpa ipsum cillum ullamco deserunt cupidatat id. Exercitation Lorem amet occaecat esse.",
  },
  {
    avatar: "Some",
    name: "Juan",
    title: "Con ganas de progresar",
    description:
      "Cupidatat aliquip dolore eu deserunt laborum esse veniam non non nulla nisi ea. Cillum Lorem cillum mollit do elit ipsum est nostrud ad consequat commodo tempor. Officia aliquip id aliqua sunt nostrud laboris excepteur eu cillum est esse. Fugiat consectetur laborum aliqua culpa in amet aute. Elit ex ullamco duis ut laboris enim officia officia adipisicing et. Voluptate do in fugiat eiusmod veniam ex culpa ipsum cillum ullamco deserunt cupidatat id. Exercitation Lorem amet occaecat esse.",
  },
  {
    avatar: "Some",
    name: "Juan",
    title: "El pequeño futbolista",
    description:
      "Cupidatat aliquip dolore eu deserunt laborum esse veniam non non nulla nisi ea. Cillum Lorem cillum mollit do elit ipsum est nostrud ad consequat commodo tempor. Officia aliquip id aliqua sunt nostrud laboris excepteur eu cillum est esse. Fugiat consectetur laborum aliqua culpa in amet aute. Elit ex ullamco duis ut laboris enim officia officia adipisicing et. Voluptate do in fugiat eiusmod veniam ex culpa ipsum cillum ullamco deserunt cupidatat id. Exercitation Lorem amet occaecat esse.",
  },
  {
    avatar: "Some",
    name: "Juan",
    title: "El pequeño futbolista",
    description:
      "Cupidatat aliquip dolore eu deserunt laborum esse veniam non non nulla nisi ea. Cillum Lorem cillum mollit do elit ipsum est nostrud ad consequat commodo tempor. Officia aliquip id aliqua sunt nostrud laboris excepteur eu cillum est esse. Fugiat consectetur laborum aliqua culpa in amet aute. Elit ex ullamco duis ut laboris enim officia officia adipisicing et. Voluptate do in fugiat eiusmod veniam ex culpa ipsum cillum ullamco deserunt cupidatat id. Exercitation Lorem amet occaecat esse.",
  },
  {
    avatar: "Some",
    name: "Juan",
    title: "El pequeño futbolista",
    description:
      "Cupidatat aliquip dolore eu deserunt laborum esse veniam non non nulla nisi ea. Cillum Lorem cillum mollit do elit ipsum est nostrud ad consequat commodo tempor. Officia aliquip id aliqua sunt nostrud laboris excepteur eu cillum est esse. Fugiat consectetur laborum aliqua culpa in amet aute. Elit ex ullamco duis ut laboris enim officia officia adipisicing et. Voluptate do in fugiat eiusmod veniam ex culpa ipsum cillum ullamco deserunt cupidatat id. Exercitation Lorem amet occaecat esse.",
  },
  {
    avatar: "Some",
    name: "Juan",
    title: "El pequeño futbolista",
    description:
      "Cupidatat aliquip dolore eu deserunt laborum esse veniam non non nulla nisi ea. Cillum Lorem cillum mollit do elit ipsum est nostrud ad consequat commodo tempor. Officia aliquip id aliqua sunt nostrud laboris excepteur eu cillum est esse. Fugiat consectetur laborum aliqua culpa in amet aute. Elit ex ullamco duis ut laboris enim officia officia adipisicing et. Voluptate do in fugiat eiusmod veniam ex culpa ipsum cillum ullamco deserunt cupidatat id. Exercitation Lorem amet occaecat esse.",
  },
];

const Post = () => {
  const router = useRouter();
  const { programId } = router.query;
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  return (
    <div>
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
        <div style={{ display: "flex", flexWrap: "wrap", margin: "4% 4%" }}>
          {chunk(kids, 3).map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {row.map((kid) => (
                <div
                  key={kid.id}
                  style={{
                    background: "#FFF",
                    padding: "2%",
                    marginTop: "2%",
                    flex: "0 0 calc(33.3333% - 1% - 1%)",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span style={{ display: "flex", justifyContent: "center" }}>
                    {kid.avatar}
                  </span>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
              ))}
            </div>
          ))}
        </div>
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
  );
};

export default Post;
