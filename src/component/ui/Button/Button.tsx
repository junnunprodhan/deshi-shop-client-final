"use client";
import { useAppSelector } from "@/redux/hook";
import React, { ReactNode } from "react";

const Button = ({
  className,
  children,
  HandleToData,
}: {
  className?: string;
  children: ReactNode;
  HandleToData?: any;
}) => {
  const { mode } = useAppSelector((store) => store.mode);
  return (
    <div>
      <button
        onClick={HandleToData}
        className={`${
          mode
            ? " bg-[#9dae11] text-white px-8 py-3 font-bold hover:bg-transparent border-2 hover:border-[#9dae11] duration-500"
            : "bg-black px-8 py-3  text-white font-bold hover:border-black hover:border hover:bg-transparent hover:text-black duration-300"
        } ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
