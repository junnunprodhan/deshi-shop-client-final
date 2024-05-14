"use client";
import { TProduct } from "@/Types/Global";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../../../../ui/Button/Button";
import { GrTrash } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import Modal from "../Modal/Modal";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

const OrderTable = ({
  product,
  HandleToUp,
  HandleToDelete,
}: {
  product: any;
  HandleToUp?: any;
  HandleToDelete?: any;
}) => {
  const [open, setOpen] = useState(false);
  const HandleToOpen = () => {
    setOpen(!open);
  };
  console.log(product);
  return (
    <>
      <tr className="hover:bg-gray-50 border-b transition duration-300 text-black">
        <td className="py-4 px-6 border-b  font-semibold">{product?.name}</td>
        <td className="py-4 px-6 border-b  font-semibold">{product?.number}</td>
        <td className="py-4 px-6 border-b  font-medium">${product?.price}</td>

        <td className="py-4 px-6 border-b ">
          <button className=" flex gap-1 items-center bg-green-100 px-3 rounded-full">
            <GiConfirmed className=" " />
           Pending
          </button>
        </td>
      </tr>
    </>
  );
};

export default OrderTable;
