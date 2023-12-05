import { useEffect, useState } from "react";
import Link from "next/link.js";
import programs from "../../public/mocks/programs.js";
import StyledLinkButton from "@/components/StyledLinkButton";
import BouncingDownArrow from "@/components/BouncingDownArrow";
import ShareButtons from "@/components/ShareButtons";

const Programs = () => {
  const [showShareButtons, setShowShareButtons] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleInviteClick = (e) => {
    e.preventDefault(); // Prevent redirection
    setShowShareButtons((prev) => !prev); // Alternates visibility of ShareButtons
  };

  useEffect(() => {
    let timeout;
    if (showShareButtons) {
      timeout = setTimeout(() => setIsLoaded(true), 50); // Establish isLoaded to true after 50ms
    } else {
      setIsLoaded(false); // Restablish isLoaded to false
    }
    return () => clearTimeout(timeout); // Clears timeout if component unmounts or if showShareButtons changes before timeout triggers
  }, [showShareButtons]);

  return (
    <>
        
      <div className={`text-3xl font-tzedaka-titles my-8 mx-10`}>
        ¿Qué significa ser un Padrino o Madrina?
      </div>
      <div className={`font-tzedaka-body my-8 mx-10`}>
        Es acompañar a chicos y jóvenes provenientes de familias vulnerables
        durante toda su escolaridad, para que puedan completar sus trayectorias
        educativas y tengan mejores oportunidades para construir su futuro. La
        ayuda se brinca a través de los programas de la fundación Tzedaká para
        estudiantes en tres niveles: ABC para escolaridad primaria, IDEA para
        secundaria y UNI para estudiantes universitarios.
      </div>
      <div className="flex flex-col justify-center sm:flex-row sm:space-x-4 my-8 mx-10">
        <div className="p-2">
          <StyledLinkButton
            href="/form"
            label="Quiero Apadrinar"
            bgColor="bg-purple-600"
            textColor="text-white"
            hoverBgColor="bg-purple-200"
            hoverTextColor="text-white-800"
          />
        </div>
        <div className="p-2">
          <StyledLinkButton
            href="/"
            label="Invitar a otros a sumarse"
            bgColor="bg-purple-600"
            textColor="text-white"
            hoverBgColor="bg-purple-200"
            hoverTextColor="text-white-800"
            onClick={handleInviteClick}
          />
          {showShareButtons && (
            <div
              className={`transition-opacity duration-1000 ease-out ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="mt-2 sm:mt-4 sm:mb-2">
                <BouncingDownArrow />
              </div>
              <ShareButtons />
            </div>
          )}
        </div>
      </div>
      <div className={`text-3xl font-tzedaka-titles my-8 mx-10`}>
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
            <div className="rounded-xl z-50 opacity-0 sm:group-hover:opacity-100 transition duration-500 ease-in-out cursor-pointer absolute inset-0 bg-black/90 text-white hidden sm:flex items-center justify-center">
              <div className="transform-gpu p-4 space-y-3 text-xl sm:group-hover:opacity-100 sm:group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                <div className="font-bold"> {programa.programName} </div>
                <div className="text-sm"> {programa.programDescription} </div>
              </div>
            </div>
            <img
              alt=""
              className={`object-contain h-full w-full aspect-auto sm:group-hover:scale-110 transition duration-300 ease-in-out`}
              src={programa.image.src}
            />
          </div>
        </div>
      </Link>
      <div className="sm:hidden font-tzedaka-body flex flex-col items-center justify-center">
        <div className="w-5/6">{programa.programDescription}</div>
        <div className="w-5/6">{programa.summaryDescription}</div>
        <Link href={`/programs/details/${programa.programId}`}>
          <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-5">
            ¡Conocelos!
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Programs;
