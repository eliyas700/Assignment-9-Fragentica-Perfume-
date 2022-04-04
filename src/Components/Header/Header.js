import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between bg-[#2e86de] px-4 items-center py-4">
      <div>
        <Link to="/">
          <img
            width={"190px"}
            src="https://www.fragrantica.com/ndimg/fragrantica-logo-tagline-svg.svg"
            alt=""
          />
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
          <Link to="/blogs">BLOGS</Link>
        </li>
        <li className="mr-5 text-lg font-semibold">
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
