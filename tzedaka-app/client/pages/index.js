import Image from "next/image";
import bg from "../images/children-playing.jpg";
import StyledLinkButton from "@/components/StyledLinkButton";
import { universe45Light, universe65Bold } from "../utils/fonts";

const HomeMainText = () => {
  return (
    <div className="text-white text-center md:w-2/6 md:h-1/3 md:mr-20">
      <p className={`mt-4 text-4xl font-bold ${universe65Bold.className}`}>
        ¡BIENVENIDO!
      </p>
      <p className={`m-6 text-xl ${universe45Light.className}`}>
        Gracias por entrar a esta página, donde tenés la posibilidad de
        cambiar una vida. En esencia, eso es lo que hace un Padrino:
        darle a un chico o a un joven, una oportunidad; acompañarlo en su
        educación y sostenerlo dentro de un proyecto que le abre puertas:
        las de un futuro distinto.
      </p>
    </div>
  );
};

const Index = () => {
  return (
    <div className="relative h-screen mx-6 flex items-center justify-center overflow-hidden">
      <Image src={bg.src} fill style={{ objectFit: "cover" }} />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center">
        <HomeMainText />
        <div className="flex mt-8 space-x-4">
          <StyledLinkButton href="/profile" label="Soy Padrino"           bgColor="bg-purple-800" textColor="text-white" hoverBgColor="bg-purple-200" hoverTextColor="text-white-800"/>
          <StyledLinkButton href="/form" label="Quiero Apadrinar"         bgColor="bg-purple-800" textColor="text-white" hoverBgColor="bg-purple-200" hoverTextColor="text-white-800"/>
          <StyledLinkButton href="/" label="Invitar a ser Padrino"  bgColor="bg-purple-800" textColor="text-white" hoverBgColor="bg-purple-200" hoverTextColor="text-white-800"/>
        </div>
      </div>
    </div>
  );
};

export default Index;