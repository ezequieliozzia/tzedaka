import React, { useState } from "react";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import NavbarButton from "../NavbarButton";
import StyledNavbarButton from "../StyledNavbarButton";

import Logo from "./Logo";
import NavbarButtons from "./NavbarButtons";
import LoginSection from "./LoginSection";
import HamburguerButton from "./HamburguerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent p-6">
      <div>
        <div className="flex justify-around sm:justify-between">
          <Logo />
          {/* <HamburguerButton isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          <div
            className={`hidden justify-end md:space-x-8 list-none sm:justify-center flex flex-col sm:flex sm:flex-row sm:items-center`}
          >
            <NavbarButtons />
          </div>
          <LoginSection isOpen={isOpen} />
        </div>
        <div className="flex justify-end sm:hidden">
          <HamburguerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && (
            <ul className="mt-2">
              <NavbarButtons />
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
