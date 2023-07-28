import { useRouter } from 'next/router';
import programs from "../../../public/mocks/programs.json"

function Post() {
  const router = useRouter();
  const { programId } = router.query;

  return (
    <div>
      <h1>{programs[programId].programName}</h1>
      <h2>{programs[programId].programDescription}</h2>
    </div>
  );
}

export default Post;