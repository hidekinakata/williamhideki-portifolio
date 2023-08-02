"use client";

import React, { PropsWithChildren } from "react";
import ContentSection from "@/components/ContentSection";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { VscTriangleRight } from "react-icons/vsc";

type AboutType = {};

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const About: React.FC<AboutType> = () => {
  return (
    <ContentSection
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      className={"relative max-w-4xl  overflow-hidden py-36 "}
    >
      <SectionTitle sectionName={"About Me"} />
      <motion.div
        variants={revealVariants}
        className={
          "grid w-full grid-cols-[5fr_4fr] gap-8 max-lg:grid-cols-none  max-lg:grid-rows-[auto_auto]"
        }
      >
        <div className={"text-lg font-light text-primary-100/60 [&>p]:mb-4"}>
          <p>
            Hi! My name is William Hideki and i got a degree in computer science
            in 2021. I started with computational math, which slowly led me to
            discover machine learning. More recently, I also added web
            development to my skills.
          </p>
          <p>
            Now I work as a freelancer, always learning new things and improving
            my knowledge for possible opportunities.
          </p>
          <p>
            Don't hesitate to{" "}
            <span className={"cursor-pointer text-emphasis-300"}>
              get in touch
            </span>{" "}
            if you need an expert who is passionate and committed to your
            projects. I am constantly looking forward to taking on new
            challenges. Together, let's make something amazing!
          </p>
          <p>Some technologies I've worked with recently:</p>
          <div className={"grid grid-cols-2"}>
            <div>
              <h2 className={"text-white/90"}>Web</h2>
              <ul className={""}>
                <CustomLI>JavaScript (ES6+)</CustomLI>
                <CustomLI>TypeScript</CustomLI>
                <CustomLI>React/Next.js</CustomLI>
                <CustomLI>Node.js</CustomLI>
              </ul>
            </div>
            <div>
              <h2 className={"text-white/90"}>Machine Learning/Data</h2>
              <ul className={""}>
                <CustomLI>Python</CustomLI>
                <CustomLI>Tensorflow/Keras</CustomLI>
                <CustomLI>Numpy and SkLearn</CustomLI>
                <CustomLI>Matplotlib/Seaborn</CustomLI>
                <CustomLI>Pandas</CustomLI>
              </ul>
            </div>
          </div>
        </div>
        <motion.div
          className={
            "h-fit w-full justify-self-center p-6 pt-0 max-lg:order-1 max-lg:w-9/12"
          }
        >
          <Image
            src={"/me.jpg"}
            width={1024}
            height={1024}
            alt={"Picture of me"}
            className={
              "-translate-x-[5px] -translate-y-[5px] rounded  object-contain shadow-[10px_10px] shadow-emphasis-400"
            }
          />
        </motion.div>
      </motion.div>
    </ContentSection>
  );
};

const CustomLI: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <li className={"flex items-center"}>
      <VscTriangleRight className={"text-emerald-300"} />
      {children}
    </li>
  );
};

export default About;
