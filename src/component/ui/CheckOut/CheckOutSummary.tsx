import { checkOutDefaultValues } from "@/DeafualtValue/global";
import BForm from "@/component/Forms/BForm";
import BSelect from "@/component/Forms/BSelect";
import { Input } from "@/component/Forms/Input";
import { clearToOrder, totalPrice } from "@/redux/api/features/orderSlice";
import {
  useCreateOrderMutation,
  useFetchAllOrderQuery,
  useFetchOrderQuery,
} from "@/redux/api/orderApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

const CheckOutSummary = () => {
  const dispatch = useAppDispatch();
  const { priceOfTotalSelectedProducts, selectedProducts } = useAppSelector(
    (store: any) => store.order
  );
  const email = useAppSelector(
    (store: { auth: { user: { email: string } } }) => store?.auth?.user?.email
  );
  const order = useAppSelector((store: any) => store?.order);
  const { data, isLoading } = useFetchAllOrderQuery(undefined);
  const [createOrder] = useCreateOrderMutation();
  const handleToSubmit = async (e: FieldValues) => {
    const confirmOrder = {
      ...e,
      name: data?.name,
      email: data?.email,
      quantity: selectedProducts,
      price: priceOfTotalSelectedProducts,
      totalPrice: 15 * selectedProducts + priceOfTotalSelectedProducts,
    };
    try {
      const res = await createOrder(confirmOrder).unwrap();
      if (res.message) {
        toast.success("Order successful");
        dispatch(clearToOrder([]));
      }
    } catch (err: any) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className=" space-y-4">
      <p className=" font-semibold text-xl">Checkout Summary</p>
      <div className="">
        <p className=" border-t-2 py-2 border-dotted flex justify-between">
          <span>Total order</span> <span>{selectedProducts}</span>
        </p>
        <p className=" border-t-2 py-2 border-dotted flex justify-between">
          <span> Sub total </span>
          <span>${priceOfTotalSelectedProducts}</span>
        </p>
        <p className=" border-t-2 py-2 border-dotted flex justify-between">
          <span> Shipping</span> <span>{15 * selectedProducts}</span>
        </p>
        <p className=" border-t-2 py-2 border-dotted flex justify-between border-b-2">
          <span>Total</span>{" "}
          <span>${15 * selectedProducts + priceOfTotalSelectedProducts}</span>
        </p>
      </div>
      <p className=" text-xl font-semibold">Shipping address</p>
      <div>
        <BForm defaultValues={checkOutDefaultValues} onSubmit={handleToSubmit}>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input edit=" rounded-md" name="name" type="text" label="Name" />

            <Input
              edit=" rounded-md"
              name="number"
              type="number"
              label="Phone Number"
            />
            <Input
              edit=" rounded-md"
              name="district"
              type="text"
              label="District"
            />
            <Input
              edit=" rounded-md"
              name="subDistrict"
              type="text"
              label="Sub District"
            />
          </div>
          <button
            disabled={selectedProducts ? false : true}
            className=" bg-black text-white font-bold w-full py-2 mt-4"
            type="submit"
          >
            Confirm order
          </button>
        </BForm>
      </div>
    </div>
  );
};

export default CheckOutSummary;
