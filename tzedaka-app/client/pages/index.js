import React, { useState } from 'react';
import Image from "next/image";
import bg from "../images/children-playing.jpg";
import StyledLinkButton from "@/components/StyledLinkButton";
import HomeMainText from "@/components/HomeMainText";
import ShareButtons from "@/components/ShareButtons";

const Index = () => {
  const [showShareButtons, setShowShareButtons] = useState(false);

  const handleInviteClick = (e) => {
    e.preventDefault(); // Prevenir la redirección
    setShowShareButtons(prev => !prev); // Alternar la visibilidad de ShareButtons
  };

  return (
    <div className="relative h-screen mx-6 flex items-center justify-center overflow-hidden">
      <Image src={bg.src} fill style={{ objectFit: "cover" }} />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center flex">
        <HomeMainText />
        <div className="flex mt-8 space-x-4">
          <StyledLinkButton href="/programs" label="Quiero Apadrinar"   bgColor="bg-purple-800" textColor="text-white" hoverBgColor="bg-purple-200" hoverTextColor="text-white-800"/>
          <StyledLinkButton href="/" label="Invitar a otros a sumarse"  bgColor="bg-purple-800" textColor="text-white" hoverBgColor="bg-purple-200" hoverTextColor="text-white-800" onClick={handleInviteClick}/>
        </div>
        {showShareButtons ? (
          <div class="flex justify-center">
            <div class="animate-bounce bg-purple-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
          ) : null   }
        {showShareButtons &&  <ShareButtons/> }
      </div>
    </div>
  );
};

export default Index;