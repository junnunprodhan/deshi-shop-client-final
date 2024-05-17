"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Gallery = () => {
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

  const GalleryVariants = {
    hidden: { opacity: 0, x: 200, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 2},
    }
  ,
    
  };
  const GalleryVariants1 = {
    hidden: { opacity: 0, x: -200, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 2 },
    },
  };
  return (
    <div className=" mt-20">
      <div className=" text-center mb-10">
        <p className=" text-xl font-semibold">Our Gallery</p>
        <p className=" md:w-[70ch] mx-auto mt-3">
          Embark on a journey of tender moments and precious milestones in our
          Baby Care Gallery. Explore the beauty of parenthood captured in every
          loving embrace and playful adventure.
        </p>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={GalleryVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
      >
        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/px7Yn0Q/1695135322-dove-dermacare-scalp-anti-dandruff-shampoo-6509b64f2bd3d.jpg"
            alt="Image 1"
            className="w-full h-48  rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/myTQwJN/lux-soap.jpg"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/jfVyT5g/salt.jpg"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/QMT5h5p/sunsilk-shampoo.webp"
            alt="Image 1"
            className="w-full h-48  rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/BVKnRmH/download-10.jpg"
            alt="Image 1"
            className="w-full h-48  rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/VV0jRmN/2022-02-04-61fd2bcfa1c38.png"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/myTQwJN/lux-soap.jpg"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/px7Yn0Q/1695135322-dove-dermacare-scalp-anti-dandruff-shampoo-6509b64f2bd3d.jpg"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={GalleryVariants1}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
      >
        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/px7Yn0Q/1695135322-dove-dermacare-scalp-anti-dandruff-shampoo-6509b64f2bd3d.jpg"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/myTQwJN/lux-soap.jpg"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/jfVyT5g/salt.jpg"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/QMT5h5p/sunsilk-shampoo.webp"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/BVKnRmH/download-10.jpg"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/VV0jRmN/2022-02-04-61fd2bcfa1c38.png"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/myTQwJN/lux-soap.jpg"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/px7Yn0Q/1695135322-dove-dermacare-scalp-anti-dandruff-shampoo-6509b64f2bd3d.jpg"
            alt="Image 1"
            className="w-full h-48 rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;