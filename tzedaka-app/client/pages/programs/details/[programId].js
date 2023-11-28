import ProgramsGrid from "../../../components/programs/details/ProgramsGrid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import programs from "../../../public/mocks/programs.js";
import kids from "../../../public/mocks/kids";
import ProgramBanner from "../../../components/programs/details/ProgramsBanner";
import { universe45Light } from "../../../utils/fonts";
import Spinner from "@/components/Spinner";
import Carousel from "@/components/programs/Carousel";
import EventService from "@/services/EventService";

const Post = () => {
  const router = useRouter();
  const [programId, setProgramId] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

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
              // ...x,
            };
          })
        );
      });
    }
  }, [router]);

  console.log("Events: ", events);
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
          <div className="w-10/12 my-10">
            <ProgramsGrid
              programs={programs}
              kids={kids}
              programId={programId}
            />
            <Carousel slides={events} />
          </div>
        </div>
      </div>
    )
  );
};

export default Post;
