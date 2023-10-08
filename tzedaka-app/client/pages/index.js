import Image from "next/image";
import bg from "../images/children-playing.jpg";
import { universe45Light, universe65Bold } from "../utils/fonts";

const Index = () => {
  return (
    <>
      <div className="relative h-84vh mx-6 rounded-lg overflow-hidden">
        <Image src={bg.src} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="absolute inset-0 flex md:items-start md:my-20 md:justify-center md:justify-end">
          <div className="flex flex-col items-center md:items-center md:justify-center md:w-2/6 md:h-1/3 bg-transparent md:mr-20">
            <p
              className={`mt-4 md:text-4xl font-bold text-white ${universe65Bold.className}`}
            >
              ¡BIENVENIDO!
            </p>
            <p
              className={`m-6 md:text-xl text-white ${universe45Light.className}`}
            >
              Gracias por entrar a esta página, donde tenés la posibilidad de
              cambiar una vida. En esencia, eso es lo que hace un Padrino :
              darle a un chico o a un joven, una oportunidad; acompañarlo en su
              educación y sostenerlo dentro de un proyecto que le abre puertas:
              las de un futuro distinto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
