import React from "react";
import { Link } from "react-router-dom";
import { SiFoodpanda } from "react-icons/si";

const Logo = ({
  customClass = "flex gap-x-3 items-center text-xl md:text-2xl lg:text-2xl text-center text-black-50 font-semibold font-mono uppercase",
}) => {
  return (
    <p className={customClass}>
      <SiFoodpanda />
      <span>
        <span className="text-error">B</span>hojon
      </span>
    </p>
  );
};

export default Logo;
