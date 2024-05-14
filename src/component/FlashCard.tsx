"use client";
import { TProduct } from "@/Types/Global";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CardIcon from "./Icon/CardIcon";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

const Card = ({ product, time }: { product: TProduct; time?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={`flash-sale/${product?._id}`}
      className=" w-full relative  space-y-2  md:hover:shadow-xl hover:duration-500  border-2 transition duration-500 ease-in-out"
    >
      <Image
        className=" h-[290px] mx-auto space-y-40 object-contain"
        width={400}
        height={600}
        src={product?.image}
        alt={product?.name}
      />

      <div className="px-1">
        <p className=" font-semibold text-[18px] text-center">
          {product?.name}
        </p>
      </div>

      <div className=" relative flex justify-center gap-6 items-center w-full pb-7">
        <div className=" font-semibold relative">
          ${product?.price}.00
          <p className=" absolute top-3 border border-black w-16"></p>
        </div>
        <p className=" font-semibold ">${product?.discountPrice}.00</p>
      </div>
      <div
        className={`flex justify-center items-center absolute top-[40%] w-full  duration-1000 gap-5  ${
          isHovered
            ? " opacity-90 z-10 "
            : " -translate-y-28 hover:opacity-0 z-[-1] "
        } `}
      >
        {isHovered && (
          <>
            <CardIcon Icon={IoEyeOutline} />
            <CardIcon Icon={MdOutlineShoppingCart} />
            <CardIcon Icon={IoMdHeartEmpty} />
          </>
        )}
      </div>
      <p className=" absolute top-0 right-2 font-bold bg bg-[#a2e233] px-6  rounded-tl-[50px] rounded-br-[50px]">
        {`${Math.round(((product.price - product.discountPrice) / 230) * 100)}`}
        %
      </p>
      <p className=" absolute top-0 left-2 font-bold bg bg-[#a2e233] px-6  rounded-tl-[50px] rounded-br-[50px]">
        {time}
      </p>
    </Link>
  );
};

export default Card;
