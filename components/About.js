import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="pt-[12rem] mx-[4rem] max-xl:mx-[1rem]" id="about">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[3rem] mb-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"
      >
        About me
      </motion.h1>
      <div>
      
      </div>
    </div>
  );
}

export default About;
