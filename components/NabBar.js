import React from "react";
import khurshid from "../assets/khurshid.png";
import Image from "next/image";
import {FiDownload} from "react-icons/fi"
function NavBar() {
  return (
    <nav className="z-[1000] backdrop-filter backdrop-blur-lg flex my-6 mx-[4rem] max-md:mx-[1rem] px-[2rem] py-[0.6rem] justify-between items-center
     rounded-2xl bg-purple-600/20 sticky top-[24px]">
      <a>
        <Image src={khurshid} alt="error" className="w-[70px] rounded-xl" />
      </a>

      <ul className="flex space-x-6 text-lg items-center max-md:hidden capitalize">
        <li className=" cursor-pointer">
          <a href="#">about</a>
        </li>
        <li className=" cursor-pointer">
          <a href="#">contact</a>
        </li>
        <li className=" cursor-pointer">
          <a href="#">projects</a>
        </li>
        <div className=" flex gap-2.5 items-center bg-gradient-to-r from-[#7000fa] px-[15px] py-2 hover:bg-gradient-to-b rounded-lg">
        Resume<FiDownload/>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
