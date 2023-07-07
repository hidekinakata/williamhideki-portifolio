import React from "react";
import { motion, Variant, Variants } from "framer-motion";
import ContentSection from "@/components/ContentSection";
import Button from "@/components/Button";
import { useCounter, useInterval } from "usehooks-ts";

type HeroType = {};

type heroVariantType = {
  hidden: Variant;
  show: Variant;
};

const sectionVariant: heroVariantType = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childsVariant: heroVariantType = {
  hidden: {
    opacity: 0,
    x: 10,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

const greetVariant: Variants = {
  hide: {
    opacity: 0,
    x: 10,
    display: "none",
    transition: {
      display: {
        delay: 0.1,
      },
    },
  },
  show: {
    opacity: 1,
    x: 0,
    display: "inline-block",
  },
};

const Hero: React.FC<HeroType> = (props) => {
  const greetings: { [key: string]: string } = {
    en: "Hello! My name is",
    pt: "Olá! Meu nome é",
    es: "¡Hola! Mi nombre es",
    jp: "初めまして！私の名前は",
  };
  const { count, setCount, increment, decrement, reset } = useCounter(0);

  const ChangeGreet = () => {
    if (count + 1 === Object.keys(greetings).length) {
      return setCount(0);
    }
    increment();
  };

  useInterval(ChangeGreet, 3e3);

  return (
    <ContentSection
      variants={sectionVariant}
      initial={"hidden"}
      animate={"show"}
      className={"pt-20"}
    >
      {/*roles*/}
      <motion.div
        variants={childsVariant}
        className={
          "mb-4 flex gap-4 font-mono text-xs font-[500] text-primary-950"
        }
      >
        <span className={"bg-emphasis-300 px-2 py-1 "}>web developer</span>
        <span className={"bg-emphasis-300 px-2 py-1"}>data scientist</span>
      </motion.div>
      {/*presentation*/}
      <motion.h1 variants={childsVariant} className={"relative mb-2 h-5 w-44 "}>
        {Object.keys(greetings).map((greet, i) => (
          <motion.span
            key={i}
            variants={greetVariant}
            animate={count === i ? "show" : "hide"}
            transition={{
              duration: 0.5,
            }}
            className={"absolute " + (greet === "jp" ? "font-jp" : "")}
          >
            {greetings[greet]}
          </motion.span>
        ))}
      </motion.h1>
      {/*name*/}
      <motion.h1
        variants={childsVariant}
        className={" text-[clamp(2.1rem,8vw,8vh)] font-bold leading-none"}
      >
        William Hideki
      </motion.h1>
      {/*emphasis*/}
      <motion.h3
        variants={childsVariant}
        className={
          "text-[clamp(2.1rem,8vw,8vh)]  leading-none text-primary-100/80"
        }
      >
        I develop stuff for people.
      </motion.h3>
      {/*description*/}
      <motion.p
        variants={childsVariant}
        className={"mt-5 max-w-xl text-xl text-primary-100/80"}
      >
        I work as a freelance web developer. I specialize in frontend
        development and also have a background in machine learning projects.
      </motion.p>
      <motion.div variants={childsVariant} className={"mt-10"}>
        <Button href={"/#projects"}>Check my projects</Button>
      </motion.div>
    </ContentSection>
  );
};

export default Hero;
