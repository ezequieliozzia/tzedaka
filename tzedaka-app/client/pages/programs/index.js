import programs from "../../public/mocks/programs.js";
import { universe45Light } from "../../utils/fonts";
import Link from "next/link.js";

const Programs = () => {
  return (
    <>
      <div className={`text-3xl font-bold ${universe45Light} my-8 mx-10`}>
        ¿Qué significa ser un Padrino o Madrina?
      </div>
      <div className={`text-xl ${universe45Light} my-8 mx-10`}>
        Es acompañar a chicos y jóvenes provenientes de familias vulnerables
        durante toda su escolaridad, para que puedan completar sus trayectorias
        educativas y tengan mejores oportunidades para construir su futuro. La
        ayuda se brinca a través de los programas de la fundación Tzedaká para
        estudiantes en tres niveles: ABC para escolaridad primaria, IDEA para
        secundaria y UNI para estudiantes universitarios.
      </div>
      <div className={`text-3xl font-bold ${universe45Light} my-8 mx-10`}>
        ¡Conocé las historias de los chicos de cada programa!
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
    <div>
      <Link href={`/programs/details/${programa.programId}`}>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="overflow-hidden bg-gray-100 cursor-pointer rounded-xl relative group h-10/12 w-10/12 flex items-center justify-center">
            {/* <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"> */}
            {/* <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out cursor-pointer absolute bottom-0 bg-black/90 text-white flex items-center justify-center h-1/w-full"> */}
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out cursor-pointer absolute inset-0 bg-black/90 text-white flex items-center justify-center">
              <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                <div className="font-bold"> {programa.programName} </div>
                <div className="text-sm"> {programa.programDescription} </div>
              </div>
            </div>
            <img
              alt=""
              className={`object-contain h-full w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out`}
              src={programa.image.src}
            />
          </div>
        </div>
      </Link>
      <div className="sm:hidden flex flex-col items-center justify-center">
        <div className="w-5/6">{programa.programDescription}</div>
        <div className="w-5/6">{programa.summaryDescription}</div>
        <Link href={`/programs/details/${programa.programId}`}>
          <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-5">
            Conocelos!
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Programs;
