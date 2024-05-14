import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineAddIcCall } from "react-icons/md";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <Container>
      <div className="bg-black space-y-6 py-10">
        <div className=" grid grid-cols-1 md:grid-cols-5 px-7 space-y-10 md:justify-items-center text-white">
          <div>
            <p className=" text-xl mt-10">Follow</p>
            <div className=" space-y-4 mt-4">
              <Link
                href={"/"}
                className=" flex items-center gap-2 duration-500 hover:text-yellow-500"
              >
                <FaFacebook className=" bg-[#3b5998] duration-500 w-8 h-8 p-2 rounded-full" />{" "}
                Facebook
              </Link>
              <Link
                href={"/"}
                className=" flex items-center gap-2 duration-500 hover:text-yellow-500"
              >
                <FaTwitter className=" bg-[#0d6efd] duration-500 w-8 h-8 p-2 rounded-full" />{" "}
                Twitter
              </Link>
              <Link
                href={"/"}
                className=" flex items-center gap-2 duration-500 hover:text-yellow-500"
              >
                <FaYoutube className=" bg-red-600 duration-500 w-8 h-8 p-2 rounded-full" />{" "}
                Youtube
              </Link>
              <Link
                href={"/"}
                className=" flex items-center gap-2 duration-500 hover:text-yellow-500"
              >
                <FaGithub className=" bg-green-500 duration-500 w-8 h-8 p-2 rounded-full" />{" "}
                Github
              </Link>
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-3 ">
              <Link className=" hover:underline hover:text-red-300" href={"/"}>
                Home
              </Link>
              <Link
                className=" hover:underline hover:text-red-300"
                href={"/flash-sale"}
              >
                Flash-sale
              </Link>
              <Link
                className=" hover:underline hover:text-red-300"
                href={"/brands"}
              >
                Brands
              </Link>
              <Link
                className=" hover:underline hover:text-red-300"
                href={"/products"}
              >
                Products
              </Link>
              <Link
                className=" hover:underline hover:text-red-300"
                href={"/products"}
              >
                About
              </Link>
              <Link
                className=" hover:underline hover:text-red-300"
                href={"/products"}
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <p className=" text-2xl mb-4">Company</p>
            <div className=" flex flex-col gap-3 ">
              <Link className=" hover:underline hover:text-red-300" href={""}>
                Email Policy
              </Link>
              <Link className=" hover:underline hover:text-red-300" href={""}>
                Privacy Policy & Cookies
              </Link>
              <Link className=" hover:underline hover:text-red-300" href={""}>
                Terms & Conditions
              </Link>
              <Link className=" hover:underline hover:text-red-300" href={""}>
                Return & Refund
              </Link>
            </div>
          </div>
          <div>
            <p className=" text-2xl mb-4">Contact</p>
            <div className=" space-y-3">
              <p>Need help href plan traveling? Contact our travel expert</p>
              <p className=" flex items-center gap-3">
                <MdOutlineAddIcCall size={30} className=" text-orange-300" />{" "}
                0(500)123-456
              </p>
              <p className=" flex items-center gap-3">
                <CgMail size={30} className=" text-orange-300" />
                testmail@gmail.com
              </p>
            </div>
          </div>
          <div>
            <p className=" text-2xl mb-4">Payment method</p>
            <div className=" space-y-3">
              <p className=" font-semibold ">Secure Payment Gateway</p>
              <div className=" flex gap-8 mt-6 ">
                <Image
                  src={"https://i.ibb.co/wJ2phHC/Amazon-icon.png"}
                  width={40}
                  height={20}
                  className=" border w-16 h-8 object-contain cursor-pointer bg-white border-red-400"
                  alt="emajhon"
                />
                <Image
                  src={
                    "https://i.ibb.co/PxKWMP1/1656235199bkash-logo-transparent.webp"
                  }
                  width={40}
                  height={20}
                  className=" border w-16 h-8 object-contain cursor-pointer bg-white border-red-400"
                  alt="emajhon"
                />
                <Image
                  src={"https://i.ibb.co/Hqcbrk3/visa-512.webp"}
                  width={40}
                  height={20}
                  className=" border w-16 h-8 object-contain cursor-pointer bg-white border-red-400"
                  alt="emajhon"
                />
                <Image
                  src={"https://i.ibb.co/Hqcbrk3/visa-512.webp"}
                  width={40}
                  height={20}
                  className=" border w-16 h-8 object-contain cursor-pointer bg-white border-red-400"
                  alt="emajhon"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className=" w-[95%] mx-auto" />
        <p className=" text-center text-white">
          &copy; 2024 developed by baby care All Right Reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
