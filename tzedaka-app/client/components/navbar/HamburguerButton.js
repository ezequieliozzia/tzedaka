import React from "react";

const MenuIcon = () => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const HamburguerButton = ({ isOpen, setIsOpen }) => {
  return (
    <div className="sm:hidden flex justify-center items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="text-gray-500 hover:text-white focus:outline-none"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
};

export default HamburguerButton;
