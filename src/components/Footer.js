import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-3 bg-gray-300 text-xs md:text-sm lg:text-sm text-base-content font-mono z-10">
      <p className="flex items-center justify-center">
        Copyright <span>&copy; {currentYear}</span> - All right reserved by
        <Link to="/">
          <Logo />
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
