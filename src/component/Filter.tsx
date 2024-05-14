"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const brands = [
  "Milk",
  "Supplements",
  "Fruits",
  "Vegetables",
  "Grains",
  "Proteins",
];
const ratings = [1, 2, 3, 4, 5];

const Filter = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [selectedRatings, setSelectedRatings] = useState<number>(0);

  const addBrands = (brand: string) => {
    setSelectedBrand((prev) => (prev = brand));
    if (brand && brand !== selectedBrand) {
      params.set("category", brand);
    } else if (brand && brand === selectedBrand) {
      setSelectedBrand((prev) => (prev = ""));
      params.delete("category");
    }

    router.replace(`${pathName}?${params.toString()}`);
  };

  const ratingChange = (rating: any) => {
    if (selectedRatings && selectedRatings === rating) {
      setSelectedRatings(0);
      params.delete("rating");
    } else {
      setSelectedRatings(rating);
      params.set("rating", rating);
    }
    router.replace(`${pathName}?${params.toString()}`);
  };

  const handleChange = (event : any) => {
    const price = event.target.value;
    setPrice(price as number);
    params.set("price", price.toString());
    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="w-full border  hover:shadow-xl hover:duration-500 transform transition-all ease-in-out rounded-md p-3 h-fit space-y-10 sticky">
      <div className="space-y-2">
        <h5 className="text-lg font-medium ">Brands</h5>

        {brands.map((brand) => (
          <div
            className=" cursor-pointer hover:text-[#a2e233] duration-400 transition-all transform hover:px-4 ease-in-out duration-700"
            key={brand}
          >
            <input
              type="checkbox"
              className="m-0 p-0"
              checked={selectedBrand === brand}
              onChange={() => addBrands(brand)}
            />{" "}
            <span className="px-1">{brand}</span>
          </div>
        ))}
      </div>
      <div className=" space-y-2 py-4">
        <h5 className="text-lg font-medium ">Price Range</h5>
        <p className="">$0 to $200</p>
        <input
          type="range"
          className="w-full"
          defaultValue={0}
          min={200}
          max={600}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <h5 className="text-lg font-medium">Ratings</h5>
        {ratings.map((rating) => (
          <div
            key={rating}
            className=" hover:text-[#a2e233] duration-700 transition-all transform hover:px-4 ease-in-out cursor-pointer"
          >
            <input
              type="checkbox"
              className="m-0 p-0"
              checked={selectedRatings === rating}
              onChange={() => ratingChange(rating)}
            />{" "}
            <span className="px-1">{rating} Star</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
