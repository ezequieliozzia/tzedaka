import ProgramsGrid from "../../../components/programs/details/ProgramsGrid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import programs from "../../../public/mocks/programs.js";
import avatars from "../../../public/mocks/kids";
import ProgramBanner from "../../../components/programs/details/ProgramsBanner";
import Spinner from "@/components/Spinner";
import Carousel from "@/components/programs/Carousel";
import EventService from "@/services/EventService";
import ProgramService from "@/services/ProgramService";

const Post = () => {
  const router = useRouter();
  const [programId, setProgramId] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [kids, setKids] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      setProgramId(router.query.programId);
      setLoading(false);

      EventService.getEvents().then((data) => {
        setEvents(
          data.map((x) => {
            return {
              url: x.Imagen,
              name: x.Name,
              description: x.Descripcion,
            };
          })
        );
      });
    }
  }, [router]);

  useEffect(() => {
    if (programId != -1) {
      const programNames = ["ABC", "IDEA", "UNI"];
      ProgramService.getChildren(programNames[programId]).then((data) => {
        const backKids = data.map((x) => {
          return {
            name: x.Nombre,
            description: x.Descripcion,
            gender: x.Genero,
            title: x.Frase,
          };
        });
        setKids(backKids);
      });
    }
  }, [programId]);

  const shouldRender = router.isReady && programId >= 0;

  if (loading) return <Spinner />;
  return (
    shouldRender && (
      <div>
        <ProgramBanner program={programs[programId]} />
        <div className="flex flex-col justify-center items-center">
          <div className={`text-xl m-5 font-tzedaka-titles`}>
            ¡Conocé a los chicos y sus historias!
          </div>
          {kids.length > 0 ? (
            <div className="w-10/12 my-10">
              <ProgramsGrid
                programs={programs}
                kids={kids}
                programId={programId}
                avatars={avatars}
              />
              <Carousel slides={events} />
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    )
  );
};

export default Post;
