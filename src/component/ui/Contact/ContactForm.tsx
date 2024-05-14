import { useForm } from "@formspree/react";
import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
import toast from "react-hot-toast";
import { Input } from "@/component/Forms/Input";
import SButton from "../Button/SButton";
import { TiLocationArrow } from "react-icons/ti";
import TextArea from "@/component/Forms/TextArea";
import BForm from "@/component/Forms/BForm";
import { FieldValues } from "react-hook-form";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgwllzg");
  if (state.succeeded) {
    toast.success("message send successful");
  }

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
    hidden: { opacity: 0, x: -50, rotateY: 180, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 2 },
    },
  };

  const HandleToSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <motion.div
      variants={containerVariants}
      ref={ref}
      animate={controls}
      initial="hidden"
    >
      <BForm onSubmit={HandleToSubmit}>
        <div className="shadow-md  mt-[50px] md:mt-0 md:px-10 px-2 py-6 border rounded-lg space-y-[18px]  md:text-white">
          <div className="form-control w-full">
            <Input label="Name" name="name" type="text" edit="" />
          </div>
          <div className="form-control w-full ">
            <Input label="Email" name="email" type="email" edit="" />
          </div>
          <div className="form-control w-full ">
            <Input label="Subject" name="subject" type="text" edit="" />
          </div>
          <div className="form-control w-full ">
            <TextArea label="Message" name="message" edit="" type="" />
          </div>
          <div className=" text-start">
            <SButton Icon={TiLocationArrow}>Send</SButton>
          </div>
        </div>
      </BForm>
    </motion.div>
  );
};

export default ContactForm;
