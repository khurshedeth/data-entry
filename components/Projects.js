import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import Project_1 from "../assets/Pro-1.png";
import Project_2 from "../assets/Pro-2.png";
import Project_3 from "../assets/Pro-3.png";
import Project_4 from "../assets/Pro-4.png";
import Project_5 from "../assets/Pro-5.png";
import Project_6 from "../assets/updated .png";

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
        <Project
          img={Project_1}
          desc="rtgrgertgeg"
          title="My personal portfolio website"
          github="https://github.com/khurshedeth/portfolio_khurshid"
          demo="https://mineportfolio-khurshid.vercel.app/"
        />
        <Project
          img={Project_2}
          desc={`iuggg`}
          title="vjuyfvjfjfv"
          demo="https://www.mintmaster.app/"
        />
        <Project
          img={Project_3}
          desc={`lorem epsum jhola leke khisum`}
          title="E-commerce web app"
          github="https://github.com/khurshedeth/shopping"
          demo="https://vercel.com/khurshedeth/shopping"
        />
        <Project
          img={Project_4}
          desc={`lorem epsum jhola leke khisum`}
          title="Multiple sender token and NFT"
          demo="https://transmit.strip.finance/"
        />
        <Project
          img={Project_5}
          desc={`lorem epsum jhola leke khisum`}
          title="Multiple sender token and NFT"
          demo="https://emp-mng-api.vercel.app/"
          github="https://github.com/khurshedeth/EmpMngAPI"
        />
        <Project
          img={Project_6}
          desc={`lorem epsum jhola leke khisum`}
          title="Multiple sender token and NFT"
          demo="https://emp-mng-api.vercel.app/"
          github="https://github.com/khurshedeth/EmpMngAPI"
        />
      </motion.div>
    </div>
  );
}

export default Projects;
