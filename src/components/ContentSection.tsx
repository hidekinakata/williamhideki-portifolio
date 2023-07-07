import React, { PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface ContentSectionType
  extends PropsWithChildren<HTMLMotionProps<"section">> {}

const ContentSection: React.FC<ContentSectionType> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.section
      {...props}
      className={
        className +
        " flex h-screen min-h-screen w-full flex-col items-start justify-center "
      }
    >
      {children}
    </motion.section>
  );
};

export default ContentSection;
