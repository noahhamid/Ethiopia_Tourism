import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, to = "./about", className }) => {
  return (
    <Link
      to={to} // Hardcoded route inside the button component
      className={`px-4 py-2 my-auto capitalize text-white inline-block rounded-3xl cursor-pointer transition-all bg-[#775cff] hover:bg-[#3a5eff] duration-500 font-semibold text-[12px] lg:text-[15px] ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
