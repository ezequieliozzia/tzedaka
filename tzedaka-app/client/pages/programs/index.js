import programs from "../../public/mocks/programs.js";
import { universe45Light } from "../../utils/fonts";
import Link from "next/link.js";

const Programs = () => {
  return (
    <>
      <div className={`text-3xl font-bold ${universe45Light} my-8 mx-10`}>
        Apadrinar un chico transforma una vida!
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4">
          {programs.map((programa) => {
            return <Card key={programa.programId} programa={programa} />;
          })}
        </div>
      </div>
    </>
  );
};

const Card = ({ programa }) => {
  return (
    <>
      <Link href={`/programs/details/${programa.programId}`}>
        <div className="flex items-center justify-center">
          <div className="overflow-hidden bg-red-400 cursor-pointer rounded-xl relative group h-10/12 w-10/12">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div className="font-bold">{programa.programName}</div>

                  <div className="opacity-60 text-sm ">
                    {programa.programDescription}
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className={`object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out`}
              src={programa.image.src}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Programs;
