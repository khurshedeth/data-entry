import React from "react";
import Image from "next/image";

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
          <a href={props.github} target="_blank" rel="norefd">
            Github
          </a>
          <a href={props.demo} target="_blank" rel="no refff">
            demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
