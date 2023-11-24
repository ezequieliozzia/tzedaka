import React, { useState } from "react";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import NavbarButton from "./NavbarButton";
import StyledNavbarButton from "./StyledNavbarButton";
import tzedakaLogo from "../images/logo-tzedaka.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="bg-transparent p-6">
      <div className="flex items-center sm:justify-between">
        <div className="flex items-center space-x-8"> {/* Contenedor para la imagen y los botones */}
          <img
            src={tzedakaLogo.src}
            className="h-11" // Tailwind CSS class para la altura de la imagen
            alt="Logo"
            loading="lazy"
          />
        </div>
        <div className="sm:hidden justify-end">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 hover:text-white focus:outline-none">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} justify-end md:space-x-8 list-none sm:justify-center flex flex-col sm:flex sm:flex-row sm:items-center`}>
          <NavbarButton text={"Inicio"} href={"/"} />
          <NavbarButton text={"Programas"} href={"/programs"} />
          <SignedIn>
            <NavbarButton text={"Perfil"} href={"/profile"} />
          </SignedIn>
          <NavbarButton text={"Contacto"} href={"/form"} />
          <NavbarButton text={"Sobre Nosotros"} href={"https://tzedaka.org.ar/la-fundacion/"} target={"_blank"}/>
          <div className="md:hidden sm:block">
            <SignedIn>
              <NavbarButton text={"Donar"} href={"/form"}/>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <NavbarButton text={"Ingresar"} href={"/signInPage"}/>
              <NavbarButton text={"Donar"} href={"/signInPage"} />
            </SignedOut>
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} hidden md:space-x-5 list-none sm:flex sm:flex-row sm:items-center justify-end`}>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <StyledNavbarButton href="/form" label="Donar" />
          </SignedIn>
          <SignedOut>
            <StyledNavbarButton href="/signInPage" label="Ingresar" />
            <StyledNavbarButton href="/signInPage" label="Donar" />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;