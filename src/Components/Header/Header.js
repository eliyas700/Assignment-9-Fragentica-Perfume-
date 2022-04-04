import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`flex justify-between sticky top-0 opacity-6 bg-[#2e86de] z-20 px-4 items-center py-4`}
    >
      <div>
        <CustomLink to="/">
          <img
            width={"190px"}
            src="https://www.fragrantica.com/ndimg/fragrantica-logo-tagline-svg.svg"
            alt=""
          />
        </CustomLink>
      </div>

      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open ? (
          <GiHamburgerMenu className="w-6 h-6"></GiHamburgerMenu>
        ) : (
          <GiCrossMark className="w-6 h-6"></GiCrossMark>
        )}
      </div>
      <ul
        className={`md:flex navigation justify-center md:static w-full py-5  font-serif absolute duration-500 ease-in ${
          open ? "top-12" : "top-[-220px]"
        }`}
      >
        <li className="mr-5  text-xl font-mono ">
          <CustomLink to="/">HOME</CustomLink>
        </li>
        <li className="mr-5 text-xl font-mono ">
          <CustomLink to="/reviews">REVIEWS</CustomLink>
        </li>
        <li className="mr-5 text-xl font-mono  ">
          <CustomLink to="/dashboard">DASHBOARD</CustomLink>
        </li>
        <li className="mr-5 text-xl font-mono ">
          <CustomLink to="/blogs">BLOGS</CustomLink>
        </li>
        <li className="mr-5 text-xl font-mono ">
          <CustomLink to="/contact">CONTACT US</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
