import ProgramsGrid from "../../../components/programs/ProgramsGrid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import programs from "../../../public/mocks/programs.js";
import kids from "../../../public/mocks/kids";
import ProgramBanner from "../../..//components/programs/ProgramBanner";
import { universe45Light } from "../../../utils/fonts";

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
        <ProgramBanner program={programs[programId]} />
        <div className="flex flex-col justify-center items-center">
          <div
            className={`text-3xl m-5 underline ${universe45Light.className}`}
          >
            Conocé a los chicos y sus historias!
          </div>
          <div className="w-8/12 my-10">
            <ProgramsGrid
              programs={programs}
              kids={kids}
              programId={programId}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Post;
