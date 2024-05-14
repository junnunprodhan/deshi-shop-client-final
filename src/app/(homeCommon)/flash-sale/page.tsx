import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import FlashCard from "@/component/FlashCard";

const FlashSaleHome = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}flash-sale`, {
    next: { revalidate: 30 },
  });
  const sales = await res.json();
  const product = sales as unknown as TProduct[];

  return (
    <div className="">
      <BrandHeader name="Flash-sale" image={product[0].image} category="" />
      <p className=" font-semibold text-xl mt-4">Flash sales</p>
      <div className=" md:grid grid-cols-4 gap-10 mx-auto  my-14 space-y-10 px-5 md:px-0 md:space-y-0">
        {product.map((item: TProduct) => (
          <FlashCard time=" 5h" key={item?._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default FlashSaleHome;
