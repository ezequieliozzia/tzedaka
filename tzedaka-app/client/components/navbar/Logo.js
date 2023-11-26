import React from "react";
import tzedakaLogo from "../../images/logo-tzedaka.png";

const Logo = () => {
  return (
    <div className="flex items-center space-x-8">
      <img
        src={tzedakaLogo.src}
        className="h-11" // Tailwind CSS class para la altura de la imagen
        alt="Logo"
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
