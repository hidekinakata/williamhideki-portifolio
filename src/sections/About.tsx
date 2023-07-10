import React from "react";
import ContentSection from "@/components/ContentSection";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type AboutType = {};

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const About: React.FC<AboutType> = () => {
  return (
    <ContentSection
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      className={"relative overflow-hidden py-24"}
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
            Hi! My name is William Hideki and I started studying computer
            science in school in 2017 and began my journey in the field. Since
            then, I have discovered a whole world of things to learn. It all
            started with computational math, which slowly led me to discover
            machine learning. More recently, I also added web development to my
            skills.
          </p>
          <p>
            Now I work as a freelancer, always learning new things and improving
            my knowledge for possible opportunities.
          </p>
          <p>
            Don't hesitate to{" "}
            <span className={"text-emphasis-300"}>get in touch</span> if you
            need an expert who is passionate and committed to your projects. I
            am constantly looking forward to taking on new challenges. Together,
            let's make something amazing!
          </p>
        </div>
        <motion.div
          className={
            "h-fit w-9/12 justify-self-center p-6 pt-0 max-lg:order-1 max-lg:w-9/12"
          }
        >
          <Image
            src={"/me.jpg"}
            width={1024}
            height={1024}
            alt={"Picture of me"}
            className={
              "-translate-x-[5px] -translate-y-[5px] rounded border border-emphasis-300 object-contain shadow-[10px_10px] shadow-emphasis-400"
            }
          />
        </motion.div>
      </motion.div>
    </ContentSection>
  );
};

export default About;
