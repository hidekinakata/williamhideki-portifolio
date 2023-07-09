import React from "react";
import Link from "next/link";

interface ButtonType extends React.HTMLProps<"a"> {}

const Button: React.FC<ButtonType> = ({
  href,
  children,
  className,
  target,
}) => {
  return (
    <Link
      href={href ?? ""}
      target={target}
      className={
        className +
        " flex items-center justify-center rounded border border-emphasis-300 bg-transparent px-4 py-3 font-mono text-emphasis-300 outline-none transition max-lg:px-3 max-lg:py-2 max-lg:text-sm " +
        "-translate-x-[2px] -translate-y-[2px] bg-primary-100/10 shadow-[3px_3px_0_0] hover:shadow-emphasis-300 active:-translate-x-[0px] active:-translate-y-[0px] active:shadow-[0px_0px_0_0]"
      }
    >
      {children}
    </Link>
  );
};

export default Button;
