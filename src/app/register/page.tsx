"use client";
import { DefaultRegisterValue } from "@/DeafualtValue/global";
import { registerSchema } from "@/ValidationSchema/registerSchema";
import BForm from "@/component/Forms/BForm";
import { Input } from "@/component/Forms/Input";
import { useCreateUserMutation } from "@/redux/api/userAPi";
import { useAppSelector } from "@/redux/hook";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { HiOutlineLogin } from "react-icons/hi";

const Register = () => {
  const router = useRouter();
  const [createUser] = useCreateUserMutation();
  const HandleToSubmit = async (data: FieldValues) => {
    try {
      const res: any = await createUser(data);
      if (res?.data) {
        toast.success("User Crated Successful");
        router.push("/login");
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };
  const { mode } = useAppSelector((store) => store.mode);
  return (
    <div className=" flex flex-col justify-center items-center w-full h-screen">
      <div
        className={`max-w-[700px] w-full mx-auto md:h-[500px] h-screen p-6 shadow-2xl ${
          mode ? "bg-white text-black" : "bg-black text-white"
        } shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 relative  flex items-center`}
      >
        <Link
          href={"/login"}
          className=" absolute border px-4 py-1 border-red-500 outline-none bg-red-600 hover:bg-transparent duration-300 flex justify-center items-center gap-2 top-0 mt-10"
        >
          <HiOutlineLogin />
          <button>Back Login</button>
        </Link>
        <div className="w-full  mb-8 sm:mb-0">
          {/* Left side form */}
          <h2 className="text-2xl font-bold mb-6 w-[95%]">Register Now</h2>
          <BForm
            defaultValues={DefaultRegisterValue}
            onSubmit={HandleToSubmit}
            resolver={zodResolver(registerSchema)}
          >
            <div className="flex flex-col space-y-4 mb-4">
              <Input label="Name" edit="" type="text" name="name" />
              <Input label="Email" edit="" type="email" name="email" />
              <Input label="Password" edit="" type="password" name="password" />
            </div>
            <div className="flex items-center space-x-2 mb-6 text-sm">
              <p>Do you have account</p>{" "}
              <Link className=" text-orange-400 underline" href={"/login"}>
                Login now
              </Link>
            </div>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
              REGISTER
            </button>
          </BForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
