import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
      <div>
        <img
          src={
            "https://tzedaka.org.ar/wp-content/uploads/2017/12/logo-tzedaka.png"
          }
          style={{ height: "40px" }}
          alt={""}
          loading={"lazy"}
        />
      </div>
      <div className="flex items-center justify-between flex-wrap space-x-5 list-none bg-transparent">
        <div className="pr-2 text-l font-semibold text-black">
          <Link href={"/"}>
            <li>Inicio</li>
          </Link>
        </div>
        <div className="pr-2 text-l font-semibold text-black">
          <Link href={"/programs"}>
            <li>Programas</li>
          </Link>
        </div>
        <div className="pr-2 text-l font-semibold text-black">
          <Link href={"/form"}>
            <li>Contacto</li>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={"https://cdn.onlinewebfonts.com/svg/img_24787.png"}
          style={{ height: "30px" }}
          alt={""}
          loading={"lazy"}
        />
        {/* <a
          href="#"
          className="inline-block text-l font-semibold px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Donar
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
