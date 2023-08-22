import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow mx-6 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span
          style={{
            color: "#000",
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "20px",
            fontWeight: "800",
            lineHeight: "30px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          Av. Santa Fé 1821 3º Piso , Buenos Aires, Argentina
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://tzedaka.org.ar/"
              className="mr-4 hover:underline md:mr-6 "
            >
              Sobre Nosotros
            </a>
          </li>
          <Link href={"/"} className="hover:underline">
            <li>Contacto</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
