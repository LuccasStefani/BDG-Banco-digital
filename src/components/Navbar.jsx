import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (

<nav className={`w-full z-50  ${styles.paddingX}`}>
  <div className={`flex justify-between items-center py-6 ${styles.boxWidth}`}>
    {/* Logo */}
    <img src={logo} alt="logo" className="w-[124px] h-[62px] sm:ml-[-50px] ml-[-25px]" />


    {/* Menu Desktop */}
    <div className="hidden sm:flex flex-1 justify-end items-center">
      <ul className="flex list-none justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <button className="ml-6 bg-[#FF9F43] text-white font-medium py-2 px-5 rounded-[10px] hover:bg-[#e08830] transition">
        Quero ser BDG
      </button>
    </div>

    {/* Menu Mobile */}
    <div className="sm:hidden flex justify-end items-center ml-8">
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[30px] h-[28px] ml-8 object-contain"
        onClick={() => setToggle(!toggle)}
      />
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-black-gradient absolute top-20 right-4 min-w-[140px] rounded-xl sidebar z-50`}
      >
        <ul className="list-none flex flex-col justify-end items-start flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => {
                setActive(nav.title);
                setToggle(false);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <button className="mt-4 bg-[#FF9F43] text-white font-medium py-2 px-4 rounded-[10px] w-full">
            Quero ser BDG
          </button>
        </ul>
      </div>
    </div>
  </div>
</nav>


  );
};

export default Navbar;
