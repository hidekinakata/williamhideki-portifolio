import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Button from "@/components/Button";
import { LuMail } from "react-icons/lu";
import LanguageToggle from "@/components/LanguageToggle";
import useScrollBehavior from "@/hooks/useScrollBehavior";

type NavbarType = {};

const mainVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childrenVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
    },
  },
};

const navVariants: Variants = {
  hidden: {
    translateY: "-100%",
    boxShadow: "none",
    transition: {
      ease: "easeInOut",
    },
  },
  visibleTop: {
    translateY: 0,
    boxShadow: "none",
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    translateY: 0,
    boxShadow: "0px 4px 20px rgb(0 0 0 / 0.3)",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Navbar: React.FC<NavbarType> = (props) => {
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Contact", link: "/#contact" },
  ];

  const scrollBehavior = useScrollBehavior();

  const behaviorMap = {
    onTop: "visibleTop",
    scrollDown: "hidden",
    scrollUp: "visible",
  };

  // const [navbarVisible, setNavbarVisible] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 100 ? setNavbarVisible(true) : setNavbarVisible(false);
  //   });
  // }, []);

  return (
    <AnimatePresence>
      <motion.nav
        variants={navVariants}
        initial={"visible"}
        animate={behaviorMap[scrollBehavior]}
        className={
          "fixed z-50 flex min-h-[100px] w-full items-center px-12 pb-6 pt-12 backdrop-blur-md max-lg:px-6  max-lg:pb-3 max-lg:pt-6"
        }
      >
        <motion.div
          variants={mainVariants}
          initial={"hidden"}
          animate={scrollBehavior === "scrollDown" ? "hidden" : "visible"}
          className={"relative flex w-full items-center justify-between "}
        >
          <motion.div variants={childrenVariants}>
            <Link href="/">
              <h1
                className={
                  "relative text-3xl text-white/80 antialiased max-lg:text-2xl"
                }
              >
                <span className={"font-[500]"}>William</span>{" "}
                <span className={"font-[200]"}>Hideki</span>
              </h1>
            </Link>
          </motion.div>

          <motion.div
            variants={childrenVariants}
            className={"flex items-center justify-center gap-4"}
          >
            {/*<LanguageToggle />*/}
            <div className={"grid grid-cols-[auto_auto] "}>
              <Button href={""}>Resume</Button>
            </div>
          </motion.div>

          <motion.ul
            variants={mainVariants}
            className={
              "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-9 text-white/80 max-lg:hidden"
            }
          >
            {sectionLinks.map(({ name, link }) => (
              <motion.li key={name} variants={childrenVariants}>
                <Link
                  className={
                    "relative p-2 font-mono transition-all hover:text-primary-400"
                  }
                  href={link}
                >
                  {name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
