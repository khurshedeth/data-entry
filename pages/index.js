import Head from "next/head";

import NabBar from "../components/NabBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      
      </Head>

      <main className=" max-w-[1440] mx-auto my-0">
        <NabBar />
        <Hero />
        <About />
       
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}
