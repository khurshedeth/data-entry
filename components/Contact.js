import React from "react";
import Image from "next/image";
import Avatar from "../assets/khurhed-photo-removebg-preview.png";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
function Contact() {
  return (
    <div
      className=" mx-[4rem] max-lg:mx-[1rem] pt-[12rem] flex gap-[5rem] items-center justify-center"
      id="contact"
    >
      <Image src={Avatar} alt="error" className=" w-[30%] max-lg:hidden opacity-40" />
      <div className=" w-[45%] max-lg:w-[100%]">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className=" text-[2rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400"
        >
          Don't be unknown
        </motion.h1>
        <motion.div
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: [100, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className=" text-[1.5rem] mb-[2rem]">
            {" "}
            Feel free to punch me an email if you believe our compatibility is
            strong, and you'd like to collaborate. Let's make the most of our
            time together
          </p>
          <h1 className="flex items-center gap-[1rem] text-[1.5rem] max-lg:text-[1rem]">
            <AiOutlineMail className="w-[25px] h-[25px]" />
            khurshed.eth@gmail.com
          </h1>
          <a href="mailto:khurshed.eth@gmail.com" className=" cursor-pointer mt-[2rem] relative inline-flex justify-center items-center p-0.5 mr-2 mb-2 overflow-hidden text-base font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className=" relative px-5 py-2.5 rounded-md transition-all ease-in duration-75 dark:bg-gray-900 group-hover:bg-opacity-0">Get In Touch</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
