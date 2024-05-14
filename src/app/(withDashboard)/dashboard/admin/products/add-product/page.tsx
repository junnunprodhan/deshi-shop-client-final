/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import AddProduct from "@/component/Dashboard/DashboardDrawer/Admin/Products/AddProduct";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const path = usePathname().split("/");
  return (
    <div>
      <div className=" flex justify-between border-b-4 bg-slate-200 p-4 mt-6 rounded-t-lg overflow-auto">
        <h1 className=" md:text-xl text-[10px] font-bold text-black">Add Product</h1>
        <div className=" flex md:gap-4 gap-1 md:text-[16px] text-[10px]">
          <Link
            className=" text-yellow-500 hover:underline hover:duration-500"
            href={`/dashboard/${path[2]}`}
          >
            {path?.[1]}
          </Link>{" "}
          {">"}
          <Link
            className=" text-yellow-500 hover:underline hover:duration-500"
            href={`/dashboard/${path[2]}`}
          >
            {path?.[2]}
          </Link>{" "}
          {">"}
          <Link
            className=" text-yellow-500 hover:underline hover:duration-500"
            href={"/dashboard/admin/products"}
          >
            {path?.[3]}
          </Link>{" "}
          {">"}
          <Link
            className=" text-yellow-500 hover:underline hover:duration-500"
            href={`/dashboard/${path[2]}/${path[3]}/${path[4]}`}
          >
            {path?.[3]}
          </Link>
        </div>
      </div>
      <div className=" bg-slate-100 px-6 py-10">
        <AddProduct />
      </div>
    </div>
  );
};

export default page;
