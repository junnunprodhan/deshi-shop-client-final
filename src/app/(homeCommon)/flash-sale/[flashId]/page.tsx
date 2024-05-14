import { TProduct } from "@/Types/Global";
import DetailsCard from "@/component/DetailsCard";
import BrandHeader from "@/component/BrandHeader";


const FlashDetailsPage = async ({ params }: { params: any }) => {
  const res = await fetch(`${process.env.BACKEND_URL}product/${params?.flashId}`);
  const sale = await res.json();
  const product = sale as TProduct[];
  
  return (
    <div>
      <BrandHeader name="Flash-sale" image={sale[0].image} category="" />
      <div className=" my-20">
        {product.map((product: TProduct) => (
          <DetailsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashDetailsPage;
