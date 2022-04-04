import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <nav className="flex justify-between bg-[#2e86de] px-4 items-center py-4">
      <div>
        <CustomLink to="/">
          <img
            width={"190px"}
            src="https://www.fragrantica.com/ndimg/fragrantica-logo-tagline-svg.svg"
            alt=""
          />
        </CustomLink>
      </div>
      <ul className="flex">
        <li className="mr-5 text-lg ">
          <CustomLink to="/">HOME</CustomLink>
        </li>
        <li className="mr-5 text-lg ">
          <CustomLink to="/reviews">REVIEWS</CustomLink>
        </li>
        <li className="mr-5 text-lg ">
          <CustomLink to="/dashboard">DASHBOARD</CustomLink>
        </li>
        <li className="mr-5 text-lg ">
          <CustomLink to="/blogs">BLOGS</CustomLink>
        </li>
        <li className="mr-5 text-lg ">
          <CustomLink to="/contact">CONTACT US</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
