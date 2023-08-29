import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
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
    </div>
  );
}

export default Hero;
