import React, { ReactNode } from "react";

const SButton = ({ children ,Icon }: { children: ReactNode , Icon: any}) => {
  return (
    <div>
      <button className=" border-2 border-[#93991d] w-40 h-16 bg-[#9dae11] relative after:absolute after:h-[100%] after:w-[100%] after:bg-white after:top-0 after:left-0 transform text-white after:-translate-x-[100%] after:duration-500 hover:after:translate-x-0 hover:text-black  overflow-hidden z-10 after:z-[-1] flex items-center justify-center gap-2">
        <Icon /> {children}
      </button>
    </div>
  );
};

export default SButton;
