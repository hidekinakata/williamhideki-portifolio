"use client";

import Image from "next/image";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import Email from "@/components/Email";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import FeaturedProjects from "@/sections/FeaturedProjects";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <Socials />
      <Email />

      <motion.main className="flex min-h-screen flex-col items-center overflow-x-hidden px-32 transition-all max-md:px-16 max-sm:px-6">
        <Hero />
        <About />
        {/*<Experience />*/}
        <FeaturedProjects />
        {/*<Contact />*/}
      </motion.main>
    </>
  );
}
