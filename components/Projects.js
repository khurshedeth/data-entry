import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

function Projects() {
  return (
    <div
      className=" flex flex-col justify-center mx-[1rem] pt-[12rem] lg:mx-[4rem]"
      id="Projects"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className=" text-[3rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-orange-700"
      >
        Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" grid grid-cols-1 gap-[5rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
      >
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        
      </motion.div>
    </div>
  );
}

export default Projects;
