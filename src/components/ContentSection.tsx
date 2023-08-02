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
        "flex  flex-col items-start justify-center transition-all first:min-h-screen max-lg:w-full " +
        "[&:nth-child(even)>h1.section-title]:flex-row-reverse [&:nth-child(even)>h1.section-title]:place-self-start " +
        "[&:nth-child(odd)>h1.section-title]:flex-row [&:nth-child(odd)>h1.section-title]:place-self-end " +
        (className ?? "")
      }
    >
      {children}
    </motion.section>
  );
};

export default ContentSection;
