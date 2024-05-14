"use client";

import React from "react";

const error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen md:w-60 w-full  mx-auto text-center">
      <p>{error?.message}</p>
      <button
        className=" border px-10 py-2 font-bold mt-3 border-black"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default error;
