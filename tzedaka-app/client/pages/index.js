import Image from "next/image";
import bg from "../images/children-playing.jpg";
import StyledLinkButton from "@/components/StyledLinkButton";
import HomeMainText from "@/components/HomeMainText";
import ShareButtons from "@/components/ShareButtons";

const Index = () => {
  return (
    <div className="relative h-screen mx-6 flex items-center justify-center overflow-hidden">
      <Image src={bg.src} fill style={{ objectFit: "cover" }} />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center flex">
        <HomeMainText />
        <div className="flex mt-8 space-x-4">
          <StyledLinkButton href="/profile" label="Soy Padrino"     bgColor="bg-purple-800" textColor="text-white" hoverBgColor="bg-purple-200" hoverTextColor="text-white-800"/>
          <StyledLinkButton href="/form" label="Quiero Apadrinar"   bgColor="bg-purple-800" textColor="text-white" hoverBgColor="bg-purple-200" hoverTextColor="text-white-800"/>
          {/* <StyledLinkButton href="/" label="Invitar a ser Padrino"  bgColor="bg-purple-800" textColor="text-white" hoverBgColor="bg-purple-200" hoverTextColor="text-white-800"/> */}
        </div>
        <ShareButtons/>
      </div>
    </div>
  );
};

export default Index;