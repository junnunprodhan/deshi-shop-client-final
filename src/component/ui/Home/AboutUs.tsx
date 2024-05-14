"use client";
import Button from "@/component/ui/Button/Button";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SButton from "../Button/SButton";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { useAnimation, useInView, motion } from "framer-motion";

const AboutUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView,controls]);

  const aboutImageVariants = {
    hidden: { opacity: 0, x: -50, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 2 },
    },
  };
  const aboutTextVariants = {
    hidden: { opacity: 0, x: 50, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <div className=" mt-20">
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <motion.div
          ref={ref}
          variants={aboutImageVariants}
          initial="hidden"
          animate={controls}
          className=" relative"
        >
          <Image
            width={500}
            height={500}
            src={
              "https://media.istockphoto.com/id/186560911/photo/feeding-excited-baby.jpg?s=1024x1024&w=is&k=20&c=iJrszhNKeudOm7EVIryGCfJzXO7Fascn_Cx5iYmUkXg="
            }
            alt=""
            className=" border-4 p-1 md:h-[350px] md:w-[400px] object-cover w-[300px]"
          />
          <Image
            width={400}
            height={400}
            src={
              "https://media.istockphoto.com/id/1156492841/photo/vegetable-and-fruit-baby-puree-in-white-bowls-with-ingredients-baby-food-concept.jpg?s=1024x1024&w=is&k=20&c=U-i1HlM77DzNaGVX7i0dS5ojE9nkI-49pEvj3Y1Yl2A="
            }
            alt=""
            className=" border-4 p-1 rounded-lg absolute md:top-40 top-20 left-24 md:left-44 md:w-[300px] md:h-[240px] w-[230px]"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={aboutTextVariants}
          className="mt-20 md:mt-0 text-center md:text-start"
        >
          <p className=" text-xl font-semibold">About Us</p>
          <p className=" mt-7">
            {" "}
            At BabyCare, we are dedicated to nourishing your little ones with
            the finest organic ingredients. Our passion for safety and taste
            ensures every spoonful supports healthy growth. Explore our range of
            wholesome purees, snacks, and meals, crafted with love and
            expertise. Trust BabyCare for a journey of nourishment and joy from
            the very start
          </p>
          <div className=" flex md:gap-7 gap-2 mt-10 justify-center md:justify-start">
            <Link href={"/about"}>
              <Button className=" h-16 w-40">About Us</Button>
            </Link>
            <Link href={"products"}>
              <SButton Icon={CgShoppingCart}>Shop Now</SButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
