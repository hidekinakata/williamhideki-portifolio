import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiCopy } from "react-icons/fi";
import { useCopyToClipboard, useCountdown } from "usehooks-ts";

type EmailType = {};

const copySpanVariants: Variants = {
  hidden: {
    display: "none",
    opacity: 0,
    left: 10,
    transition: {
      display: {
        delay: 0.5,
      },
    },
  },
  show: {
    display: "block",
    opacity: 1,
    left: 0,
  },
};

const Email: React.FC<EmailType> = (props) => {
  const [value, copy] = useCopyToClipboard();
  const [showCopyPopup, setShowCopyPopup] = useState(false);
  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: 2,
    });

  const handleCopy = () => {
    copy("whnakata@gmail.com");
    setShowCopyPopup(true);
    startCountdown();
  };

  useEffect(() => {
    if (count === 0) {
      setShowCopyPopup(false);
      resetCountdown();
    }
  }, [count]);

  return (
    <motion.div
      className="fixed bottom-0 right-12 max-lg:right-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="flex flex-col gap-2 after:mx-auto after:my-0  after:mt-6 after:block after:h-20 after:w-0.5 after:bg-white/70 after:content-['']">
        <li
          title={"email"}
          className="flex flex-col items-center justify-center text-xl"
        >
          <Link
            href={"mailto:whnakata@gmail.com"}
            className="icon font-mono text-sm [writing-mode:vertical-lr]"
            target="_blank"
          >
            whnakata@gmail.com
          </Link>
        </li>
        <li className={"relative"}>
          <FiCopy
            className={
              "icon mx-auto box-content cursor-pointer rounded border border-white/20 !p-2 text-xs"
            }
            onClick={handleCopy}
          />
          <motion.span
            variants={copySpanVariants}
            initial={"hidden"}
            animate={showCopyPopup ? "show" : "hidden"}
            className={
              "clippath-tri absolute left-0 top-1/2 flex w-40 -translate-x-full -translate-y-1/2 flex-col rounded bg-emphasis-300 p-2 pl-[7%] text-center font-mono text-sm text-primary-950"
            }
          >
            <span>🤩</span>
            You copied my email to clipboard
          </motion.span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Email;
