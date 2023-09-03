import React from "react";
import { motion } from "framer-motion";
import {AiFillGithub,AiFillLinkedin,AiFillTwitterCircle} from "react-icons/ai"
function Hero() {
  return (
    <div
      className=" flex justify-between items-center mx-[4rem]
     mt-[4rem] max-lg:mx-[1rem] max-lg:selection:mt-[2rem] max-lg:gap-[4rem] max-lg:flex-col"
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
          I am frontend developer
          <br />and<br/>
          Web3 enthusiast
        </h3>
        <div className=" flex gap-[1rem] mt-[4rem] max-md:mt-[2rem] text-[2rem]">
          <a><AiFillGithub/></a>
          <a><AiFillLinkedin/></a>
          <a><AiFillTwitterCircle/></a>
        </div>
      </motion.div>
      <div>image</div>
    </div>
  );
}

export default Hero;
