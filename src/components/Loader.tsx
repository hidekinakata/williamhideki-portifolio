"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type LoaderType = {
  isLoading: boolean;
  setIsLoading: () => void;
};

const Loader: React.FC<LoaderType> = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 2200);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {" "}
      {isLoading && (
        <motion.div
          exit={{ scale: 0.99, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={
            "absolute flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-900/50"
          }
        >
          <h1 className={"relative text-4xl text-white/80 antialiased"}>
            <motion.div
              animate={{
                height: ["2px", "2px", "2px", "2px", "50px", "2px", "2px"],
                top: ["-5px", "-5px", "-5px", "-5px", "-5px", "48px", "48px"],
                opacity: [0, 0, 0, 0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                type: "tween",
              }}
              className={
                "absolute left-1/2 w-[110%]  -translate-x-1/2 bg-white "
              }
            ></motion.div>
            <motion.span
              animate={{
                opacity: [1, 1, 1, 1, 1, 0, 0],
              }}
              transition={{
                duration: 2,
                type: "keyframes",
              }}
            >
              {"<"} <span className={"font-[500]"}>William</span>{" "}
              <span className={"font-[200]"}>Hideki</span> {"/>"}
            </motion.span>
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
