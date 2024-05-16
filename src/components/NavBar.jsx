/* eslint-disable no-unused-vars */
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hookbank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center"></div>
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain sm:hidden"
        onClick={() => setToggle(!toggle)}
      />
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-transparent bg-gradient-to-l from-slate-500 to-slate-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex justify-end flex-col">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
