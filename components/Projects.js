import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import Project_1 from "../assets/Pro-1.png";
import Project_2 from "../assets/Pro-2.png";
import Project_3 from "../assets/Pro-3.png";
import Project_4 from "../assets/Pro-4.png";
import blinkexam from "../assets/blinkexam.png"
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
          desc="My Personal Portfolio Website is a digital showcase of my professional and creative journey
          and showcase of my skills"
          title="My Minimal Personal Portfolio Website"
          github="https://github.com/khurshedeth/portfolio_khurshid"
          demo="https://mineportfolio-khurshid.vercel.app/"
        />
        <Project
          img={Project_2}
          desc="NFT Connect - Where Digital Collectibles Meet Blockchain Innovation"
          title="A Non-Fungible Token (NFT) platform is a revolutionary digital marketplace"
          demo="https://www.mintmaster.app/"
          github="https://github.com/khurshedeth/"
        />
        <Project
          img={Project_3}
          desc="The E-commerce Web App is a dynamic online shopping platform designed to provide users with a seamless and enjoyable shopping experience"
          title="E-commerce web app"
          github="https://github.com/khurshedeth/shopping"
          demo="https://shopping-drab.vercel.app/"
        />
        <Project
          img={Project_4}
          desc="Explore the exciting world of blockchain and digital assets with our project"
          title=" Multiple Sender Token and NFT Integration"
          demo="https://transmit.strip.finance/"
          github="https://github.com/khurshedeth/"
        />
        <Project
          img={blinkexam}
          desc="Its an client registration portal where a student. and parent can also register to track the chlid progress"
          title="Blinkexam is an online test platform"
          demo="https://clientuat.blinkexam.com/"
          github="https://github.com/khurshedeth/"
        />
        <Project
          img={Project_6}
          desc="The Weather Forecast App is your go-to digital companion for staying informed about the weather conditions in your area and around city"
          title="Weather forecast App"
          demo="https://my-weather-livid.vercel.app/"
          github="https://github.com/khurshedeth/my-weather"
        />
      </motion.div>
    </div>
  );
}

export default Projects;
