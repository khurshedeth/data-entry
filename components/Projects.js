import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div
      className=" flex flex-col justify-center mx-[1rem] pt-[12rem] lg:mx-[4rem]"
      id="Projects"
    >
      <motion.h1
        initial={{}}
        whileInView={{}}
        transition={{}}
        viewport={{}}
        className=" text-[3rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-orange-700"
      >
        Projects
      </motion.h1>
      <div>Epployee management</div>
      <div>Weather </div>
      <div>transmit</div>
    </div>
  );
}

export default Projects;
