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
            src="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/Misc/1686560126390"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co/txDgNGr/horlix.webp"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://assets.babycenter.com/ims/2021/01/cow-and-gate-4-6-months-breakfast_4x3.jpg"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://c4.wallpaperflare.com/wallpaper/191/174/369/summer-the-sun-glade-child-wallpaper-preview.jpg"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://c4.wallpaperflare.com/wallpaper/473/242/553/child-face-food-spoon-wallpaper-preview.jpg"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://c4.wallpaperflare.com/wallpaper/937/735/645/soup-food-mushroom-spoon-hd-wallpaper-preview.jpg"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://c4.wallpaperflare.com/wallpaper/277/600/860/soup-spoon-dish-wallpaper-preview.jpg"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <Image
            width={200}
            height={200}
            src="https://c1.wallpaperflare.com/preview/233/514/459/healthy-pumpkin-soup-top-view.jpg"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
