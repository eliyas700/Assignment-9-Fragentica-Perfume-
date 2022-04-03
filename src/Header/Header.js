import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <nav className="flex justify-between bg-[#a29bfe] px-4 items-center py-2">
      <div>
        <Link to="/">
          <img width={"70px"} src={logo} alt="" />
        </Link>
      </div>
      <ul className="flex">
        <li className="mr-5 text-lg font-semibold">
          <Link to="/">HOME</Link>
        </li>
        <li className="mr-5 text-lg font-semibold">
          <Link to="/reviews">REVIEWS</Link>
        </li>
        <li className="mr-5 text-lg font-semibold">
          <Link to="/dashboard">DASHBOARD</Link>
        </li>
        <li className="mr-5 text-lg font-semibold">
          <Link to="/blog">BLOGS</Link>
        </li>
        <li className="mr-5 text-lg font-semibold">
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
