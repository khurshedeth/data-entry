import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
function Footer() {
  return (
    <footer className="mx-[1rem] p-4 sm:p-6 xl:mx-[4rem] mt-[4rem]">
      <hr className=" my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          Designed and developed by
          <a
            href="https://github.com/khurshedeth/"
            target="_blank"
            rel="noreferrer"
            className=" hover:underline ml-2"
          >
            Khurshed Aalam
          </a>
        </span>


        <div className=" flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.linkedin.com/in/khurshd-alam/"
            target="_blank"
            rel="noreff"
            className=" text-gray-500 hover:text-white"
          >
            <AiFillLinkedin  className=" w-[20px] h-[20px]"/>
          </a>
          
          <a
          href="https://twitter.com/eth_parzivaleth"
            target="_blank"
            rel="noreff"
            className=" text-gray-500 hover:text-white">
            <AiFillTwitterCircle className=" w-[20px] h-[20px]"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
