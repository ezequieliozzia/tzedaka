import React from "react";
import { useRouter } from "next/navigation";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import NavbarButton from "./NavbarButton";
import tzedakaLogo from "../images/logo-tzedaka.png";

const Navbar = () => {
  const { push } = useRouter();
  const handleLogIn = () => {
    push("/signInPage");
  };

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
        <NavbarButton
          text={"Sobre Nosotros"}
          href={"https://tzedaka.org.ar/la-fundacion/"}
          target={"_blank"}
        />
      </div>
      <div className="flex items-center justify-center flex-nowrap space-x-5 list-none bg-transparent">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <button className="relative h-12 w-24 rounded-full overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
            <span className="relative z-10">Donar</span>
          </button>
        </SignedIn>

        <SignedOut>
          <button
            onClick={handleLogIn}
            className="relative h-12 w-24 rounded-full overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
          >
            <span className="relative z-10">Ingresar</span>
          </button>

          <button
            onClick={handleLogIn}
            className="relative h-12 w-24 rounded-full overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
          >
            <span className="relative z-10">Donar</span>
          </button>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
