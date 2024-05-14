import { useAppSelector } from "@/redux/hook";
import React, { ReactNode } from "react";

const Provide = ({ children }: { children: ReactNode }) => {
  const { mode } = useAppSelector((data) => data.mode);
  return (
    <div className={`${mode ? "bg-black text-white" : "bg-white text-black"} duration-700`}>
      {children}
    </div>
  );
};

export default Provide;
