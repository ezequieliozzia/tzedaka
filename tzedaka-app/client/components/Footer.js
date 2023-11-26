import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow mx-6 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Todos los derechos reservados © 2023 | Fundación Tzedaká | Montevideo 919, pisos 3º y 4º, Buenos Aires, Argentina | 0810-888-1818
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <Link href={"https://tzedaka.org.ar/"} className="hover:underline mr-4 md:mr-6">
            <li>Sobre Nosotros</li>
          </Link>
          <Link href={"/"} className="hover:underline">
            <li>Contacto</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
