import Link from 'next/link';
import React, { useState } from 'react';

const StyledLinkButton = ({ href, label, bgColor, textColor, hoverBgColor, hoverTextColor, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); // Prevenir la navegación por defecto si hay una función onClick
      onClick(e);
    }
  };

  return (
    <div className="flex inset-0 flex justify-center items-end my-10">
      <Link href={href}>
        <div
          className={`py-4 px-8 text-white font-bold uppercase text-l rounded ${bgColor} hover:${isHovered ? hoverBgColor : bgColor}`}
          onMouseOver={handleHover}
          onClick={handleClick}
        >
          {label}
        </div>
      </Link>
    </div>
  );
};


export default StyledLinkButton;
