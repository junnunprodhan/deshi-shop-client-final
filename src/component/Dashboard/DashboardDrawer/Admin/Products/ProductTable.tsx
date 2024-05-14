"use client";
import { TProduct } from "@/Types/Global";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../../../../ui/Button/Button";
import { GrTrash } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import Modal from "../Modal/Modal";

const ProductTable = ({
  product,
  HandleToUp,
  HandleToDelete,
}: {
  product: TProduct;
  HandleToUp?: any;
  HandleToDelete?: any;
}) => {
  const [open, setOpen] = useState(false);
  const HandleToOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <tr className="hover:bg-gray-50 border-b transition duration-300">
        <td className="py-4 px-4 flex justify-start">
          <Image
            width={100}
            height={100}
            src={product?.image}
            alt=""
            className="h-16 w-16 object-cover bg-gray-300 rounded-full border-4"
          />
        </td>
        <td className="py-4 px-6 border-b  font-semibold">{product?.name}</td>
        <td className="py-4 px-6 border-b  font-semibold">
          {product?.category}
        </td>
        <td className="py-4 px-6 border-b  font-medium">${product?.price}</td>
        <td className="py-4 px-6 border-b  font-medium">
          ${product?.stock ? product?.stock : 10}
        </td>
        <td className="py-4 px-6 border-b text-end">
          <Button
            HandleToData={() => HandleToDelete(product?._id)}
            className=" rounded-full"
          >
            <GrTrash className="  z-20" />
          </Button>
        </td>
        <td className="py-4 border px-6 border-b text-end">
          <Button HandleToData={HandleToOpen} className=" rounded-full">
            <BiEdit className="  z-20" />
          </Button>
          <Modal product={product} openModal={open} setOpenModal={setOpen} />
        </td>
      </tr>
    </>
  );
};

export default ProductTable;
