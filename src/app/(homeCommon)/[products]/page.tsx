import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import Filter from "@/component/Filter";
import ProductsCard from "@/component/ProductsCard";

const page = async (props: {
  params: { products: string };
  searchParams: any;
}) => {
  const search = props.searchParams;

  const queryUrl = new URLSearchParams(search).toString();
  const res = await fetch(`${process.env.BACKEND_URL}products?${queryUrl}`);
  const data = await res.json();
  return (
    <div>
      <BrandHeader
        category=""
        name="Products"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqM0ejZgV7MwGv0kxaKMTVd7wg2gvAcsZaWw&usqp=CAU"
      />

      <div className=" grid md:grid-cols-12 gap-10 mt-10">
        <div className=" md:col-span-2 sticky top-0">
          <Filter />
        </div>
        <div className=" grid grid-cols-1 md:col-span-10 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
          {data.map((product: TProduct) => (
            <ProductsCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
