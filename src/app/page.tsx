"use client";

import Image from "next/image";
import React, { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import Email from "@/components/Email";
import Hero from "@/sections/Hero";
import About from "@/sections/About";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };
  return (
    <>
      {showContent && (
        <>
          <Navbar />
          <Socials />
          <Email />

          <main className="flex min-h-screen flex-col items-center justify-between px-36 transition-all max-lg:px-6">
            <Hero />
            <About />
            {/*<Experience />*/}
            {/*<Projects />*/}
            {/*<Contact />*/}
          </main>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </>
  );
}
