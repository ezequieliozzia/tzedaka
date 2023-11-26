import React from "react";
import NavbarButton from "../NavbarButton";
import { SignedIn } from "@clerk/nextjs";

const NavbarButtons = () => {
  return (
    <>
      <NavbarButton text={"Inicio"} href={"/"} />
      <NavbarButton text={"Quiero apadrinar"} href={"/programs"} />
      <SignedIn>
        <NavbarButton text={"Mi perfil"} href={"/profile"} />
      </SignedIn>
      <NavbarButton text={"Contacto"} href={"/form"} />
      <NavbarButton
        text={"Sobre nosotros"}
        href={"https://tzedaka.org.ar/la-fundacion/"}
        target={"_blank"}
      />
    </>
  );
};

export default NavbarButtons;
