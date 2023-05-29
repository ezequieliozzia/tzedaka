import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    // <nav className={styles.mainnav}>
    <nav>
      <ul>
        <Link href="/">
          <li>Inicio</li>
        </Link>
        <Link href="/">
          <li>Programas</li>
        </Link>
        <Link href="/">
          <li>Contacto</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
