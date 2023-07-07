import React, { useState } from "react";
import { useBoolean, useToggle } from "usehooks-ts";

type LanguageToggleType = {};

const LanguageToggle: React.FC<LanguageToggleType> = (props) => {
  const languages = ["en", "pt"];
  const [language, setLanguage] = useState(languages[0]);
  const [checkbox, toggleCheckbox, setCheckbox] = useToggle(false);

  const handleToggleLang = () => {
    setLanguage(!checkbox ? languages[1] : languages[0]);
    setCheckbox((x: boolean) => !x);
  };

  return (
    <label className="relative inline-block h-8 w-[4.2rem] bg-primary-400">
      <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer bg-gray-400"></span>
      <input type="checkbox" checked={checkbox} onClick={handleToggleLang} />
    </label>
  );
};

export default LanguageToggle;
