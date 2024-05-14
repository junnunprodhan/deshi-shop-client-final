import { TProduct } from "@/Types/Global";
import Button from "@/component/ui/Button/Button";
import TopCard from "@/component/TopCard";
import Link from "next/link";
import React from "react";

const Brand = async ({}) => {
  const res = await fetch(`${process.env.BACKEND_URL}products`);
  const products = await res.json();

  return (
    <div className=" mt-20">
      <div className=" text-center">
        <p className=" text-xl font-semibold">Top Categories</p>
        <p className=" md:w-[60ch] mx-auto mt-2">
          Explore our top categories to discover a world of possibilities.
          Whether youre searching for inspiration, information, or products
        </p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-20 mt-20">
        {products.slice(0, 6).map((product: TProduct) => (
          <TopCard
            key={product?._id}
            product={product}
            category={product?.category}
          />
        ))}
      </div>
      <Link href={"/brands"} className=" flex justify-center mt-16">
        <Button className=" rounded-full">All Category</Button>
      </Link>
    </div>
  );
};

export default Brand;
