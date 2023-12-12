import React, { useState } from "react";
import khurshid from "../assets/khurshid.png";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";
import Image from "next/image";
import {FiDownload}  from "react-icons/fi";


function NavBar() {
  const [isclicked, setIsclicked] = useState(false);

  const clickHandler = () => {
    setIsclicked(!isclicked);
  };

  const downloadResume = () => {
    const resumeUrl = "/Md_Nio.pdf";
    const link=document.createElement("a")
    link.href = resumeUrl;
    link.download = "khurshid-CV"; 
    link.click();
  };

  return (
    <nav
      className="z-[1000] backdrop-filter backdrop-blur-lg flex my-6 mx-[4rem] max-md:mx-[1rem] px-[2rem] py-[0.6rem] justify-between items-center
     rounded-2xl bg-purple-600/20 sticky top-[24px]"
    >
      <a>
        <Image src={khurshid} alt="error" className="w-[70px] rounded-xl" />
      </a>

      <ul className="flex space-x-6 text-lg items-center max-md:hidden capitalize">
        <li className=" cursor-pointer">
          <a href="#about">
            about
          </a>
        </li>
        <li className=" cursor-pointer">
          <a href="#contact">
            contact
          </a>
        </li>
        <li className=" cursor-pointer">
          <a href="#Projects">
            projects
          </a>
        </li>
        <div className=" flex gap-2.5 items-center bg-gradient-to-r from-[#7000fa] px-[15px] py-2 hover:bg-gradient-to-b rounded-lg cursor-pointer" onClick={downloadResume}>
          Resume
          <FiDownload  />
        </div>
      </ul>
      {!isclicked && (
        <Image
          src={menu}
          alt="Error"
          className=" w-10 h-10 hidden max-md:block rounded-[5px] cursor-pointer"
          onClick={clickHandler}
        />
      )}
      {isclicked && (
        <Image
          src={cross}
          alt="Error"
          className=" w-10 h-10 hidden max-md:block rounded-[5px] cursor-pointer"
          onClick={clickHandler}
        />
      )}
      {isclicked && (
        <ul className=" w-full absolute right-0 top-[100px] flex flex-col items-center gap-[20px] py-[30px] rounded-2xl bg-[#351B57] backdrop-filter backdrop-blur-lg">
          <li className=" cursor-pointer">
            <a href="#about" onClick={clickHandler}> About</a>
          </li>
          <li className=" cursor-pointer">
            <a href="#contact" onClick={clickHandler}>Contact</a>
          </li>
          <li className=" cursor-pointer">
            <a href="#Projects" onClick={clickHandler}>Projects</a>
          </li>
          <a className=" cursor-pointer flex items-center gap-2.5" onClick={downloadResume}>
            Download Resume
            <FiDownload />
          </a>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
