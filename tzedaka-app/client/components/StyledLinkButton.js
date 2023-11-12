import Link from 'next/link';
import React, { useState } from 'react';

const StyledLinkButton = ({ href, label, bgColor, textColor, hoverBgColor, hoverTextColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="absolute inset-0 flex justify-center items-end my-10">
      <Link href={href}>
        <div
          className={`py-4 px-8 text-white font-bold uppercase text-l rounded ${bgColor} hover:${isHovered ? hoverBgColor : bgColor}`}
          onMouseOver={handleHover}
        >
          {label}
        </div>
      </Link>
    </div>
  );
};


export default StyledLinkButton;
