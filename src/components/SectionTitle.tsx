import React from "react";

type SectionTitleType = {
  sectionName: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleType> = ({ sectionName }) => {
  return (
    <h1
      className={
        " section-title relative mb-10 mt-3 flex w-[60%]  items-center justify-end gap-4 whitespace-nowrap text-3xl font-semibold max-lg:w-full " +
        "before:block before:h-0.5 before:w-full before:bg-white/10 before:content-[''] "
      }
      aria-description={"section-title"}
    >
      {sectionName}
      <span
        className={
          "absolute top-0 -translate-y-3/4 text-sm font-light text-emphasis-300"
        }
      >
        section
      </span>
    </h1>
  );
};

export default SectionTitle;
