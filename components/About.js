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
          viewport={{once:true}}
        >
          <Image
            src={khurshed}
            alt="error"
            className="w-[100%] h-[90%] rounded-xl max-xl:w-[100%] opacity-"
          />
        </motion.div>

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className=" w-[100%] flex flex-col gap-[2rem]"
        >
          <h1 className=" text-[2.5rem] max-md:text-[2rem]">
            I'm Frontend engineer mainly focused on React Ecosytem
          </h1>
          <p className="text-[#838697] text-[2rem] max-md:text-[1.5rem]">
            After dedicating a year to frontend development, I've fortified my
            foundational knowledge in web engineering. I'm now enthusiastic
            about applying these skills to tackle complex projects that will not
            only enhance my current skill set but also broaden my technological
            repertoire.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
