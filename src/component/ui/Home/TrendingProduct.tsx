import { TProduct } from "@/Types/Global";
import React from "react";
import Link from "next/link";
import Button from "@/component/ui/Button/Button";
import ProductsCard from "@/component/ProductsCard";

const TrendingProduct = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}products`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  data.sort((a: TProduct, b: TProduct) => b.rating - a.rating);

  return (
    <div className=" mt-20">
      <div className=" text-center">
        <p className=" text-2xl font-semibold">Trending Product</p>
        <p className=" md:w-[70ch] mx-auto mt-3">
          Stay ahead of the curve with our trending section, showcasing the
          hottest products of the moment. Discover whats popular and be the
          trendsetter you aspire to be
        </p>
        <div className=" flex justify-between my-14 items-center">
          <p className=" font-bold md:text-2xl ">Most popular product</p>
          <Link href={"/products"}>
            <Button className="rounded-full">See more</Button>
          </Link>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
        {data.slice(0, 6).map((product: TProduct) => (
          <ProductsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
