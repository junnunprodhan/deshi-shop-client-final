import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import DetailsCard from "@/component/DetailsCard";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(`https://ecomarce-back-9.onrender.com/products`);
  const data = await res.json();
  return data.slice(0, 10).map((product: TProduct) => ({
    productId: product._id.toString(),
  }));
};

const page = async ({ params }: { params: { productId: string } }) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}product/${params.productId}`
  );
  const data = await res.json();

  return (
    <div>
      <BrandHeader
        category={data[0].category}
        name="Product"
        image={data[0].image}
      />
      <div>
        {data.map((product: TProduct) => (
          <DetailsCard product={product} key={product?._id} />
        ))}
      </div>
    </div>
  );
};

export default page;
