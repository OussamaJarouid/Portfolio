import { NavLinks } from "../Navbar/NavBarItems";
export const FouterMain = () => {
  return (
    <div className="px-4">
      <div className="mt-24 w-full h-[1px] bg-lightGrey "></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto  ">
        <p className="text-3xl text-lightGrey"> Oussama Jarouid </p>
        <ul className="flex gap-4 text-xl text-lightGrey ">
          {NavLinks.map((item, idx) => {
            return (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-white transition-all transform duration-500 cursor-pointer"
                >
                  {item.Link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className=" max-w-[1200px] mx-auto text-right  text-sm mt-2 mb-12 text-lightBrown">
        © 2025 Oussama Jarouid | All rights reserved.
      </p>
    </div>
  );
};
