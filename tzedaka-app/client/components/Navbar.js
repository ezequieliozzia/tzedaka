import React from "react";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import NavbarButton from "./NavbarButton";
import tzedakaLogo from "../images/logo-tzedaka.png";
import StyledNavbarButton from "./StyledNavbarButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly flex-wrap bg-transparent p-6">
      <div>
        <img
          src={tzedakaLogo.src}
          style={{ height: "45px" }}
          alt={""}
          loading={"lazy"}
        />
      </div>
      <div className="flex items-center justify-between flex-wrap space-x-8 list-none bg-transparent">
        <NavbarButton text={"Inicio"} href={"/"} />
        <NavbarButton text={"Programas"} href={"/programs"} />
        <SignedIn>
          <NavbarButton text={"Perfil"} href={"/profile"} />
        </SignedIn>
        <NavbarButton text={"Contacto"} href={"/form"} />
        <NavbarButton text={"Sobre Nosotros"} href={"https://tzedaka.org.ar/la-fundacion/"} target={"_blank"}/>
      </div>
      <div className="flex items-center justify-center flex-nowrap space-x-5 list-none bg-transparent">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <StyledNavbarButton href="/form" label="Donar" />
        </SignedIn>
        <SignedOut>
          <StyledNavbarButton href="/signInPage" label="Ingresar" />
          <StyledNavbarButton href="/signInPage" label="Donar" />
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
