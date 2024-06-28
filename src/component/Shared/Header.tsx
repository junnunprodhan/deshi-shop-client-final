"use client";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaSun } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setUser } from "@/redux/api/features/authSlice";
import { MdAddShoppingCart } from "react-icons/md";
import { setMode } from "@/redux/api/features/modeSlice";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleHeader = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store?.auth?.user);
  const { mode } = useAppSelector((store) => store.mode);

  const order = useAppSelector((store) => store?.order?.order);
  const HandleToLogOut = () => {
    dispatch(setUser({ user: null, token: null }));
  };
  const HandleToMode = () => {
    dispatch(setMode());
  };

  const isAdmin = "admin";
  return (
    <div className=" z-20 fixed w-full ">
      <div className=" flex px-3 text-white font-semibold text-[16px]  bg-[#000000] w-full h-14 mx-auto">
        <div className=" flex items-center">
          <Link href={"/"}>
            <p className=" flex items-center gap-1 text-[32px]">
             Deshi<span className ="text-blue-400">Shop</span>
             
            </p>
          </Link>
        </div>

        <div className=" w-full  md:z-0 z-20 flex justify-end">
          <div className=" absolute right-2 top-2">
            <span onClick={HandleHeader} className="md:hidden">
              {isOpen ? <AiOutlineClose size={25} /> : <FaBars size={25} />}
            </span>
          </div>
          <ul
            className={` md:flex  items-center justify-end  h-14  gap-10 py-2 absolute  md:space-y-0 space-y-4 ${
              isOpen
                ? "bg-[#000000] z-10 left-0 top-[58px] w-full h-screen px-5 transition-all delay-100 duration-600"
                : "-left-[450px] h-screen md:h-14 md:left-auto "
            }`}
          >
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/"}>Home</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/flash-sale"}>Flash Sale</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/products"}>Products</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"#"}>About</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"#"}>Contact</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={`/dashboard/${isAdmin}`}>Dashboard</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col relative">
              <Link href={"/checkout"}>
                <p className=" absolute md:-top-3 md:-right-6 left-6 text-[12px] bg-[#a2e233] px-3 rounded-full">
                  {order?.length}
                </p>
                <MdAddShoppingCart size={20} />{" "}
              </Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li
              onClick={HandleToMode}
              className="group flex  cursor-pointer flex-col relative justify-center items-center rounded-full duration-500"
            >
              {mode ? (
                <IoSunnyOutline size={25} />
              ) : (
                <HiOutlineMoon size={25} />
              )}
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

            {user ? (
              <li className="group flex  cursor-pointer flex-col text-start justify-start">
                <button onClick={HandleToLogOut}>LogOut</button>
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ) : (
              <div className=" md:flex items-center gap-10 space-y-4 md:space-y-0">
                <li className="group flex  cursor-pointer flex-col">
                  <Link href={"/login"}>Login</Link>
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex  cursor-pointer flex-col">
                  <Link href={"/register"}>Register</Link>
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
