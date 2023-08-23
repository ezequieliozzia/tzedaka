import React from "react";
import Link from "next/link";
import { latoBold700 } from "../utils/fonts";

const NavbarButton = (props) => {
  return (
    <div
      className={`pr-2 text-l font-semibold text-black ${latoBold700.className}`}
    >
      <Link href={props.href} target={props.target}>
        <li>{props.text}</li>
      </Link>
    </div>
  );
};

export default NavbarButton;
