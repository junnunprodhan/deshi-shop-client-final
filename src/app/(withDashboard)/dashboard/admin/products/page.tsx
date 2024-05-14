/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { TProduct } from "@/Types/Global";
import Loading from "@/app/loading";
import ProductTable from "@/component/Dashboard/DashboardDrawer/Admin/Products/ProductTable";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/api/productApi";
import React from "react";
import toast from "react-hot-toast";

const page = () => {
  const { data, isLoading } = useGetProductsQuery<any>(undefined);

  const [productDelete] = useDeleteProductMutation();
  const HandleToDelete = async (id: string) => {
    try {
      const res: any = await productDelete(id).unwrap();
      console.log(res);
      if (res.acknowledged) {
        toast.success("Products deleted successful");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };
  const HandleToUp = (id: string) => {
    console.log(id);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full mx-auto ">
      <table className=" w-full mx-auto shadow-md border border-gray-100 my-6">
        <thead>
          <tr className="bg-slate-200 text-black border-b-2 shadow-xl rounded-t-md">
            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
            <th className="py-4 px-6 text-lg text-left border-b">Name</th>
            <th className="py-4 px-6 text-lg text-left border-b">Category</th>
            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
            <th className="py-4 px-6 text-lg text-left border-b">Stock</th>
            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
          </tr>
        </thead>
        <tbody className=" bg-slate-100 text-black">
          {data?.map((product: TProduct) => (
            <ProductTable
              HandleToDelete={HandleToDelete}
              HandleToUp={HandleToUp}
              key={product?._id}
              product={product}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
