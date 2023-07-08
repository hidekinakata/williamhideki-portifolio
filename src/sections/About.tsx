import React from "react";
import ContentSection from "@/components/ContentSection";

type AboutType = {};

const About: React.FC<AboutType> = () => {
  return (
    <ContentSection>
      <h1
        className={
          " flex w-full items-center justify-end gap-4 py-20 text-3xl " +
          "before:block before:h-0.5 before:w-96 before:bg-white/10 before:content-[''] "
        }
      >
        About me
      </h1>
    </ContentSection>
  );
};

export default About;
