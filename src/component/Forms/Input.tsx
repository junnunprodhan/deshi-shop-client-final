import { TInput } from "@/Types/Global";
import { Controller, useFormContext } from "react-hook-form";

export const Input = ({ edit, name, type, label }: TInput) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="relative w-full rounded-sm">
          <input
            {...field}
            className={`peer w-full rounded-sm border border-[#1B8EF8] px-4 py-2 text-black focus:outline-none ${edit} }`}
            type={type}
            {...(type === "number" && field.value < 0 && { disabled: true })}
            placeholder=""
          />
          <label
            className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
            htmlFor=""
          >
            {label}
          </label>
          {error && (
            <p
              className="text-white text-xs font-bold bg-red-500"
              id={`${name}-error`}
            >
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};
