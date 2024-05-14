"use client";
import { TProduct } from "@/Types/Global";
import Image from "next/image";
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import Button from "./ui/Button/Button";
import SButton from "./ui/Button/SButton";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import toast from "react-hot-toast";
import { addToOrder } from "@/redux/api/features/orderSlice";

const DetailsCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store?.auth?.user);

  const HandleToAdd = async (product: TProduct) => {
    const order = {
      email: user?.email,
      productId: product?._id,
      category: product?.category,
      name: product?.name,
      price: product?.price,
      image: product?.image,
    };
    try {
      dispatch(addToOrder({ order: order }));
    } catch (err: any) {
      toast?.error(err?.message || "An error occurred while adding to the order.");
    }
  };
  return (
    <div className=" md:grid grid-cols-2 gap-10 md:px-0 px-3 my-10">
      <div className=" relative">
        <Image
          className=" border md:h-screen object-cover"
          src={product.image}
          height={700}
          width={700}
          alt={product.name}
        />
        <div className=" absolute top-6 left-6">
          <div className=" relative text-3xl font-semibold text-green-600">
            ${product.price}
            <p className=" border border-black w-20 absolute top-[50%]"></p>
          </div>
        </div>
      </div>
      <div className=" space-y-10">
        <div className=" space-y-4">
          <p className=" text-xl font-semibold">{product.name}</p>

          <p className=" text-3xl font-semibold text-green-600">
            ${product.discountPrice}
          </p>
          <p>{product.description}</p>
        </div>
        <hr />
        <div className=" space-y-2">
          <div className=" font-semibold">
            Type: <span className=" font-normal">{product.category}</span>
          </div>
          <div className=" font-semibold">
            Vitamins:{" "}
            <span className=" font-normal">{product.nutrients.vitamins}</span>
          </div>
          <div className=" font-semibold">
            Minerals:{" "}
            <span className=" font-normal">{product.nutrients.minerals}</span>
          </div>
        </div>
        <hr />
        <div className=" flex gap-6">
          <button onClick={() => HandleToAdd(product)}>
            <SButton Icon={CgShoppingCart}>Add to Cart</SButton>
          </button>
          <Button className="h-16 w-40">Buy it now</Button>
        </div>
        <hr />
        <div>
          <p className=" font-semibold ">Secure Payment Gateway</p>
          <div className=" flex gap-8 mt-6 ">
            <Image
              src={"https://i.ibb.co/wJ2phHC/Amazon-icon.png"}
              width={40}
              height={20}
              className=" border w-16 h-8 object-contain cursor-pointer"
              alt="emajhon"
            />
            <Image
              src={
                "https://i.ibb.co/PxKWMP1/1656235199bkash-logo-transparent.webp"
              }
              width={40}
              height={20}
              className=" border w-16 h-8 object-contain cursor-pointer"
              alt="emajhon"
            />
            <Image
              src={"https://i.ibb.co/Hqcbrk3/visa-512.webp"}
              width={40}
              height={20}
              className=" border w-16 h-8 object-contain cursor-pointer"
              alt="emajhon"
            />
            <Image
              src={"https://i.ibb.co/Hqcbrk3/visa-512.webp"}
              width={40}
              height={20}
              className=" border w-16 h-8 object-contain cursor-pointer"
              alt="emajhon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
