import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className=" flex justify-between items-center mx-[4rem] mt-[4rem] max-lg:mx-[1rem]">
      <motion.div>
        <h1>Hi 👋, My name is</h1>
        <h3>Khurshid Alam</h3>
        <h3>I am frontend developer</h3>
        <br />
        <h3>using React js </h3>

        <div>
          <a>Github</a>
          <a>linkedin</a>
          <a>Twitter</a>
        </div>
      </motion.div>
      <div>image</div>
    </div>
  );
}

export default Hero;
