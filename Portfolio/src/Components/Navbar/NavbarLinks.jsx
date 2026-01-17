import { NavLinks } from "./NavBarItems";
import { Link } from "react-scroll";

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-8 lg:gap-12 text-white items-center">
      {NavLinks.map((links, idx) => {
        return (
          <li
            key={idx}
            className="group relative cursor-pointer"
          >
            <Link
              to={links.section}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="text-cyan font-bold"
              className="text-xl lg:text-lg font-medium hover:text-cyan transition-colors duration-300 block py-2"
            >
              {links.Link}
            </Link>
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
