import { TInput } from "@/Types/Global";
import React, { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

const FileUpload = ({ name, type, edit }: TInput) => {
  const { control } = useFormContext();
  const [showName1, setShowName1] = useState<any>({});

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <div className=" w-full h-full border-2 border-dotted border-[#1B8EF8]">
          <label htmlFor="type3-3" className="flex w-full h-full">
            <p className="border-cyan-500 px-8 py-3 text-sm font-medium text-cyan-500 shadow-md w-full h-full flex flex-col justify-center items-center">
              <MdCloudUpload size={70} />
              {showName1.name ? showName1.name : "CHOOSE FILE"}
            </p>
          </label>
          <input
            {...field}
            value={value?.fileName}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName1(imageFile);
              }
              onChange((e?.target as HTMLInputElement).files?.[0]);
            }}
            className="hidden"
            type="file"
            name=""
            id="type3-3"
          />
        </div>
      )}
    />
  );
};

export default FileUpload;
