"use client";

import React from "react";
import ContentSection from "@/components/ContentSection";
import SectionTitle from "@/components/SectionTitle";
import { FiHeart } from "react-icons/fi";
import ProjectShowcase from "@/components/ProjectShowcase";

type FeaturedProjectsType = {};

const FeaturedProjects: React.FC<FeaturedProjectsType> = (props) => {
  return (
    <ContentSection
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      className={"relative min-h-screen max-w-4xl py-36"}
    >
      <SectionTitle
        sectionName={
          <span className={"relative flex items-center gap-2"}>
            Projects
            <span
              className={
                "absolute bottom-0 right-0 flex translate-y-full items-center gap-2 text-xs"
              }
            >
              Made with
              <FiHeart className={"fill-red-500 text-red-500"} />
            </span>
          </span>
        }
      />

      <ProjectShowcase
        
        title={"William Hideki Portifolio"}
        description={
          "My personal portifolio, made with Next.js 13. Made to show a little about me and my work. In addition to exploring the basics of html, css, javascript (typescript) and current libraries such as Tailwindcss and Framer Motion"
        }
        img_url={"/projects_imgs/img.png"}
        tags={["Next.js", "Typescript", "Tailwindcss", "Framer-motion"]}
        links={{
          demo: "https://williamhideki.vercel.app",
          github: "https://github.com/hidekinakata/williamhideki-portifolio",
        }}
      />
    </ContentSection>
  );
};

export default FeaturedProjects;
