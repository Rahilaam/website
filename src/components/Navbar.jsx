import React from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          src={logo}
          alt="my logo here"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      {/*menu*/}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      {/*hamburger*/}
      <div className="hidden">
        <FaBars />
      </div>
      {/*mobile menu*/}
      <ul className="hidden">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      {/*social icons*/}
      <div className="hidden"></div>
    </div>
  );
}
