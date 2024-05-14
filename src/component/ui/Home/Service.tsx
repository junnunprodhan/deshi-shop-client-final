import React from "react";
import { BiSupport } from "react-icons/bi";
import { CgSync } from "react-icons/cg";
import { GiTriquetra } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";

const Service = () => {
  return (
    <div className=" mt-20 mb-20">
      <div className=" text-center mb-10">
        <p className=" font-semibold text-2xl">Our Service</p>
        <p className=" mt-3 text-gray-500 md:w-[70ch] mx-auto">
          Nourish your little one with our wholesome baby food selection.
          Quality ingredients, convenient delivery – a promise of care and
          nourishment.
        </p>
      </div>
      <div className=" md:flex gap-[2px] shadow-2xl space-y-11 md:space-y-0">
        <div className=" flex items-center shadow-2xl gap-5 p-6">
          <div>
            <IoCarSportOutline size={40} />
          </div>
          <div>
            <p className=" text-xl font-semibold mb-2">Free home delivery</p>
            <p className=" text-gray-500">
              Provide free home delivery for all product over $100
            </p>
          </div>
        </div>

        <div className=" flex items-center shadow-2xl gap-5 p-6">
          <div>
            <GiTriquetra size={40} />
          </div>
          <div>
            <p className=" text-xl font-semibold mb-2">Quality Products</p>
            <p className=" text-gray-500">
              We ensure the product quality that is our main goa
            </p>
          </div>
        </div>
        <div className=" flex items-center shadow-2xl gap-5 p-6">
          <div>
            <CgSync size={40} />
          </div>
          <div>
            <p className=" text-xl font-semibold mb-2">3 Days Return</p>
            <p className=" text-gray-500">
              Return product within 3 days for any product you buy
            </p>
          </div>
        </div>

        <div className=" flex items-center shadow-2xl gap-5 p-6">
          <div>
            <BiSupport size={40} />
          </div>
          <div>
            <p className=" text-xl font-semibold mb-2">Online Support</p>
            <p className=" text-gray-500">
              We ensure the product quality that you can trust easily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
