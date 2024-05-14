"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiStar } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import CardIcon from "./Icon/CardIcon";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { TTopCard } from "@/Types/Global";

const BrandCard = ({ product }: TTopCard | any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={{
        pathname: `brands/${product?.category}/${product?._id}`,
      }}
      className="w-full border relative space-y-2 text-black col-span-1 cursor-pointer  hover:shadow-xl hover:duration-500 h-[400px] overflow-hidden transition duration-500 ease-in-out"
    >
      <Image
        className="h-[230px] mx-auto space-y-40 group-hover:scale-110 duration-500"
        width={400}
        height={600}
        src={product?.image }
        alt={product?.name}
      />

      <div className="flex gap-1 justify-center items-center text-yellow-400 pt-10">
        <BiStar />
        <BiStar />
        <BiStar />
        <BiStar />
      </div>
      <div className="px-1">
        <p className="font-semibold text-[18px] text-center duration-300 hover:text-[#a2e233]">
          {product ? product?.name : name}
        </p>
      </div>
      <div className="relative flex justify-center gap-6 items-center w-full pb-7 text-[#a2e233] duration-300">
        <div className="font-semibold relative">
          ${product?.price }.00
          <p className="absolute top-3 border border-black w-16"></p>
        </div>
        <p className="font-semibold ">
          ${product?.discountPrice}.00
        </p>
      </div>

      {/* <p className="absolute text-white top-0 right-2  bg-[#a2e233] px-6  rounded-tl-[50px] rounded-br-[50px]">
        {`${Math.round(
          product
            ? ((product?.price - product?.discountPrice) / product?.price) * 100
            : ((price - discountPrice) / 230) * 100
        )}`}
        %
      </p> */}
    

      <div
        className={`flex justify-center items-center absolute top-[40%] w-full duration-1000 gap-5  ${
          isHovered
            ? " opacity-90 z-10 "
            : " -translate-y-28 hover:opacity-0 z-[-1]"
        }`}
      >
        {isHovered && (
          <>
            <CardIcon Icon={IoEyeOutline} />
            <CardIcon Icon={MdOutlineShoppingCart} />
            <CardIcon Icon={IoMdHeartEmpty} />
          </>
        )}
      </div>
    </Link>
  );
};

export default BrandCard;
