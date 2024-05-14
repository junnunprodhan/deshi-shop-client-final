import React, { useEffect, useRef } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { useAnimation, motion, useInView } from "framer-motion";

const ContactInfo = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, x: -50, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      ref={ref}
      animate={controls}
      initial="hidden"
      className=""
    >
      <div className=" space-y-5 mx-2 shadow-md rounded-md">
        <div className="border rounded-lg text-start flex md:gap-5 gap-3 md:pl-5 pl-3 py-8 ">
          <div>
            <p className=" bg-[#a2e233] md:w-16 md:h-16 w-10 h-10 flex items-center justify-center rounded-full">
              <BiPhoneCall size={20} />
            </p>
          </div>
          <div>
            <p className=" font-bold  text-xl mb-3 ">Contact on phone</p>
            <p className=" hover:text-[#a2e233]">+0435340943</p>
            <p className=" hover:text-[#a2e233]">+0983489809</p>
          </div>
        </div>

        <div className="border rounded-lg text-start flex md:gap-5 gap-3 md:pl-5 pl-3 py-8 ">
          <div>
            <p className="  bg-[#a2e233] md:w-16 md:h-16 w-10 h-10 flex items-center justify-center rounded-full">
              <AiOutlineMail size={20} />
            </p>
          </div>
          <div>
            <p className=" font-bold  text-xl mb-3 ">Contact on mail</p>
            <p className=" hover:text-[#a2e233]">baby342@gmail.com</p>
          </div>
        </div>

        <div className="border rounded-lg   text-start flex md:gap-5 gap-3 pl-3 md:pl-5 py-8">
          <div>
            <p className=" text-[#a2e233] bg-[#a2e233] md:w-16 md:h-16 w-10 h-10 flex items-center justify-center rounded-full">
              <FaAddressCard size={30} />
            </p>
          </div>
          <div>
            <p className=" font-bold  text-xl mb-3 ">Contact address</p>
            <p className=" hover:text-[#a2e233]">Random,children</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
