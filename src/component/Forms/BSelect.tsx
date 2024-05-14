import { TBSelect } from "@/Types/Global";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

const BSelect = ({ options, edit, name, label, multi }: TBSelect) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={`space-y-2 ${edit}`}>
          <label className=" font-semibold" htmlFor={label}>
            {label}
          </label>
          <Select
            {...field}
            closeMenuOnSelect={false}
            isMulti={multi}
            options={options}
          />
        </div>
      )}
    />
  );
};

export default BSelect;
