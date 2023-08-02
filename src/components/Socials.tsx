"use client";

import Link from "next/link";
import React from "react";
import {
  FiCodepen,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";
type SocialsType = {};

const Socials: React.FC<SocialsType> = (props) => {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com" },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/",
    },
    {
      name: "Codepen",
      icon: <FiCodepen />,
      link: "https://codepen.com/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/",
    },
  ];
  return (
    <motion.div
      className="fixed bottom-0 left-12 max-lg:left-6 max-md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="flex flex-col after:mx-auto after:my-0 after:mt-6 after:block after:h-20 after:w-0.5 after:bg-white/70 after:content-['']">
        {socialLinks.map(({ name, icon, link }) => (
          <li
            key={name}
            title={name}
            className="flex items-center justify-center text-xl"
          >
            <Link href={link} className="icon" target="_blank">
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Socials;
