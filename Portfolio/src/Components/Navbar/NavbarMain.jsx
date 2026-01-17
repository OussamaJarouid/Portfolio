import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import NavBarButton from "./NavBarButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 flex justify-between items-center">
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
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-3xl text-white p-2 focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 lg:hidden"
          >
            <div onClick={toggleMenu}>
               <NavbarLinks />
            </div>
             <div onClick={toggleMenu}>
                <NavBarButton />
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarMain;
