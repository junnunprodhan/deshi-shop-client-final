import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
      <Image
        width={400}
        height={400}
        src={"https://i.ibb.co/qM1dgyL/5203299-removebg-preview.png"}
        alt=""
      />
      <Link
        href="/"
        className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
