import React from "react";
import ContentSection from "@/components/ContentSection";

type AboutType = {};

const About: React.FC<AboutType> = () => {
  return (
    <ContentSection className={"relative pt-28"}>
      <h1
        className={
          "relative mb-96 flex w-[60%] items-center justify-end gap-4 place-self-end whitespace-nowrap text-3xl max-lg:w-full " +
          "before:block before:h-0.5 before:w-full before:bg-white/10 before:content-[''] "
        }
      >
        About me
        <span
          className={
            "absolute top-0 -translate-y-3/4 text-sm text-emphasis-300"
          }
        >
          section
        </span>
      </h1>
    </ContentSection>
  );
};

export default About;
