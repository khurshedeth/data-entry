import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import khurshed from "../assets/khurhed-photo.jpg";
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
      <div className=" flex gap-[10rem] max-xl:gap-[3rem] max-xl:flex-wrap justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [-100, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src={khurshed} alt="error" className="w-[50%] max-xl:w-[100%]" />
        </motion.div>

        <div>about pharases</div>
      </div>
    </div>
  );
}

export default About;
