import Link from "next/link";
import { TProduct } from "@/Types/Global";
import Button from "@/component/ui/Button/Button";
import Card from "@/component/FlashCard";

const FlashSale = async () => {
  const res = await fetch("https://deshi-shop-server-final-2.onrender.com/flash-sale");
if (!res.ok) {
  throw new Error("Failed to fetch flash sale data");
}
const sales = await res.json();
  return (
    <div className=" mt-20 px-2">
      <div className=" flex justify-between items-center">
        <p className=" text-xl font-semibold ">Flash Sale</p>
        <Link href={"/flash-sale"}>
          {" "}
          <Button className=" rounded-full">See more</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto pt-10 space-y-10 md:space-y-0">
        {sales?.slice(0, 4)?.map((item: TProduct, index:number) => (
          <Card time={index + 1 + "d"} key={item?._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
