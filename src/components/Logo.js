import React from "react";
import { Link } from "react-router-dom";
import { SiFoodpanda } from "react-icons/si";

const Logo = ({
  customClass = "flex gap-x-3 items-center text-xl md:text-2xl lg:text-2xl text-center text-black-50 font-bold font-mono uppercase",
  link = "/",
}) => {
  return (
    <Link className={customClass} to={link}>
      <SiFoodpanda className="text-primary" />
      <span>
        <span className="text-primary">B</span>hojon
      </span>
    </Link>
  );
};

export default Logo;
