import React, { useState } from "react";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import NavBarButton from "./NavBarButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1300px] mx-auto px-6 py-4 flex justify-between items-center relative">
        <Logo />

        {/* Desktop Links */}
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <NavBarButton />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-white p-2 focus:outline-none hover:text-cyan transition-colors"
          >
            {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 border-b border-white/10 flex flex-col items-center gap-6 py-8 lg:hidden shadow-2xl transition-all duration-300 origin-top ${
          isMenuOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-0 invisible"
        }`}
      >
        <div onClick={() => setIsMenuOpen(false)}>
          <NavbarLinks />
        </div>
        <div onClick={() => setIsMenuOpen(false)}>
          <NavBarButton />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
