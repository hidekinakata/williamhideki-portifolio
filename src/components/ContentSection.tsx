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
        " flex w-full flex-col items-start justify-center first:min-h-screen "
      }
    >
      {children}
    </motion.section>
  );
};

export default ContentSection;
