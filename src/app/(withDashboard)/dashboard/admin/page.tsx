// import ApexChart from "@/component/Dashboard/ApexChart/ApexChart";
import React from "react";

const page = () => {
  return <div>
    <div className="mb-7.5">
  <h2 className="text-white font-bold mb-1.25">
  Dashboard
  </h2>
  <h5 className="text-green-400">
  Welcome to Admin Dashboard!!
  </h5>
</div>

<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="bg-white rounded-lg">
    <div className="p-2 ">
      <h1>Total Sales</h1>
      <div>
        {/* <ApexChart/> */}
      </div>
    </div>
  </div>
  <div>total earning $</div>
  <div>total incomes</div>
  <div>total products</div>
</div>

  </div>

}
export default page;
