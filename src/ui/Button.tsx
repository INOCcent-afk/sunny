import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  outline?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  icon,
  outline = false,
}) => {
  return (
    <button
      className={`border-2 flex items-center gap-3 border-primary bg-primary ${
        outline ? "bg-[transparent] text-darkFont" : ""
      } w-fit text-sm px-8 py-2 duration-300 transition-colors hover:bg-opacity-80`}
    >
      {children}
      {icon}
    </button>
  );
};
