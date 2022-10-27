import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="fixed top-0 right-0 z-50 w-screen mx-6 mt-3 mb-16">
      <div className="flex justify-between items-center">
        <Logo customclassName="flex gap-x-4 items-center justify-center text-2xl text-center text-stone-100 font-semibold uppercase p-4 ml-12 cursor-pointer" />

        <ul className="flex gap-x-4 font-medium">
          <li className="text-lg cursor-pointer">
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-lg cursor-pointer">
            <Link to="features" smooth={true} duration={500}>
              Features
            </Link>
          </li>
          <li className="text-lg cursor-pointer">
            <Link to="hero" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li className="text-lg cursor-pointer">
            <Link to="hero" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="text-lg cursor-pointer">
            <Link to="hero" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
