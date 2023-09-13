import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
function Project(props) {
  return (
    <div className="max-w-sm border border-e-gray-200 rounded-lg shadow bg-[#101319] dark:border-gray-700">
      <a href={props.demo} target="_blank" rel="noreffer">
        <Image src={props.img} />
      </a>
      <div className=" p-5">
        <a href={props.demo} target="_blank" rel="norefff">
          <h5 className=" mb-2 text-2xl font-bold tracking-tight text-white">
            {props.title}
          </h5>
        </a>
        <p className=" mb-3 font-normal text-gray-400">{props.desc}</p>
        <div className=" flex gap-[1rem]">
          <a
            href={props.github}
            target="_blank"
            rel="norefff"
            className=" inline-flex gap[0.5rem] items-center px-3 py-2  
            text-sm font-medium text-center rounded-md border focus:ring-4 focus:outline-none mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
          >
            Github
            <AiFillGithub  className=" w-[18px] h-[18px]"/>
          </a>
          {props.demo && (
            <a href={props.demo} target="_blank" rel="noreff" className=" inline-flex gap-[0.5rem] items-center px-3 py-2 text-sm font-medium text-center rounded-md border focus:outline-none mr-2 mb-2 focus:ring-4 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800">
              demo
              <AiFillEye className=" w-[18px] h-[18px]"/>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
