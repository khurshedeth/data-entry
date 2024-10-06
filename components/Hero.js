import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/khurhed-photo-removebg-preview.png";
import Image from "next/image";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Hero() {
  return (
    <div
      className=" flex justify-between items-center mx-[4rem]
     mt-[4rem] max-lg:mx-[1rem] max-lg:mt-[2rem] max-lg:gap-[4rem] max-lg:flex-col"
    >
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [-250, 0], opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h1>Hi 👋, My name is</h1>
        <h3 className=" text-[3rem] max-md:text-[1.9rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
          Khurshed Aalam
        </h3>
        <h3 className=" text-[3rem] max-md:text-[1.5rem]">
          I am Data Entry Operator
          <br /> and Developer
        </h3>
        <div className=" flex gap-[1rem] mt-[4rem] max-md:mt-[2rem]">
          
          <a
            href="https://www.linkedin.com/in/khurshd-alam/"
            target="_blank"
            rel="noref"
          >
            <AiFillLinkedin className=" w-[30px] h-[30px] cursor-pointer" />
          </a>
          
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [250, 0], opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={photo}
          alt="hero"
          className=" w-[300px] rounded-full drop-shadow-xl opacity-50"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
