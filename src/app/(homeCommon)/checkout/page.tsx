"use client";
import { TOrder } from "@/Types/Global";
import CheckOutCart from "@/component/ui/CheckOut/CheckOutCart";
import CheckOutSummary from "@/component/ui/CheckOut/CheckOutSummary";
import { clearToOrder } from "@/redux/api/features/orderSlice";
/* eslint-disable react-hooks/rules-of-hooks */
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { MdCancel } from "react-icons/md";

const page = () => {
  const data = useAppSelector((store: any) => store.order.order);
  const dispatch = useAppDispatch();
  return (
    <>
      {data?.length ? (
        <div className=" grid md:grid-cols-2 gap-10">
          <div className=" bg-[#FFFF] p-5  shadow-md">
            <div className=" flex justify-between font-bold text-xl py-3 text-black">
              <p>Total Order {data?.length}</p>
              <button
                onClick={() => dispatch(clearToOrder({ order: [] }))}
                className=" flex justify-center items-center gap-1 bg-red-600 hover:bg-red-700 duration-300 text-sm text-white rounded-md px-2 py-1"
              >
                <MdCancel />
                Clear Order
              </button>
            </div>
            <div className=" space-y-4">
              {" "}
              {data?.map((order: TOrder) => (
                <CheckOutCart key={order?.productId} order={order} />
              ))}
            </div>
          </div>
          <div className=" p-10 bg-[#FFFFFF] shadow-xl text-black">
            <CheckOutSummary />
          </div>
        </div>
      ) : (
        <p className=" h-screen flex justify-center items-center text-2xl">
          Cart is empty
        </p>
      )}
    </>
  );
};

export default page;
