import React, { useState, useEffect } from 'react';
import Image from "next/image";
import bg from "../images/children-playing.jpg";
import StyledLinkButton from "@/components/StyledLinkButton";
import HomeMainText from "@/components/HomeMainText";
import ShareButtons from "@/components/ShareButtons";
import BouncingDownArrow from '@/components/BouncingDownArrow';

const Index = () => {
  const [showShareButtons, setShowShareButtons] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleInviteClick = (e) => {
    e.preventDefault(); // Prevent redirection
    setShowShareButtons(prev => !prev); // Alternates visibility of ShareButtons
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
    <div className="relative h-screen mx-6 flex items-center justify-center overflow-hidden">
      <Image src={bg.src} fill style={{ objectFit: "cover" }} />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center flex">
        <HomeMainText />
        <div className="flex mt-8 space-x-4">
          <StyledLinkButton href="/programs" label="Quiero Apadrinar"   bgColor="bg-purple-600" textColor="text-white" hoverBgColor="bg-purple-200" hoverTextColor="text-white-800"/>
          <StyledLinkButton href="/" label="Invitar a otros a sumarse"  bgColor="bg-purple-600" textColor="text-white" hoverBgColor="bg-purple-200" hoverTextColor="text-white-800" onClick={handleInviteClick}/>
        </div>
        {showShareButtons && (
          <div className={`transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <BouncingDownArrow/>
            <ShareButtons/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;