"use client";
import { DefaultLoginValue } from "@/DeafualtValue/global";
import { loginSchema } from "@/ValidationSchema/loginSchema";
import BForm from "@/component/Forms/BForm";
import { Input } from "@/component/Forms/Input";
import Button from "@/component/ui/Button/Button";
import { setUser } from "@/redux/api/features/authSlice";
import { useLoginUserMutation } from "@/redux/api/userAPi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import verifyToken from "@/utils/verifyToken/verifyToken";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loginUser] = useLoginUserMutation();
  const HandleToLogin = async (data: FieldValues) => {
    try {
      const res: any = await loginUser(data).unwrap();
      const user = verifyToken(res?.token);
      dispatch(setUser({ user: user, token: res?.token }));
      if (res?.token) {
        toast.success("User login successful");
        router.push("/");
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };
  const { mode } = useAppSelector((store) => store.mode);
  return (
    <div className=" h-screen border flex flex-col justify-center items-center ">
      <div
        className={`max-w-[800px] mx-auto md:h-[600px] h-screen p-6 shadow-md ${
          mode ? "bg-white text-black" : "bg-black text-white"
        } shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 relative  flex items-center`}
      >
        <Link
          href={"/"}
          className=" absolute border px-4 py-1 border-red-500 outline-none bg-red-600 hover:bg-transparent duration-300 flex justify-center items-center gap-2 top-0 mt-10"
        >
          <IoMdHome />
          <button>Back Home</button>
        </Link>
        <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            {/* Left side form */}
            <h2 className="text-2xl font-bold mb-6 w-0">Login</h2>
            <BForm
              defaultValues={DefaultLoginValue}
              resolver={zodResolver(loginSchema)}
              onSubmit={HandleToLogin}
            >
              <div className="flex flex-col space-y-4 mb-4">
                <Input edit="" type="email" name="email" label="Email" />
                <Input
                  edit=""
                  type="password"
                  name="password"
                  label="Password"
                />
              </div>
              <div className="flex items-center space-x-2 mb-6 text-sm">
                <p>Do you want to crate account</p>{" "}
                <Link className=" text-orange-400 underline" href={"/register"}>
                  Register now
                </Link>
              </div>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
                LOG IN
              </button>
            </BForm>
          </div>
          {/* Right side content */}
          <div className="w-full sm:w-1/2">
            <p className="text-sm mb-6">
              If you don&apos;t already have an account click the button below
              to create your account.
            </p>
            <Link href={"/register"}>
              <Button className={`${mode ? 'hover:text-black w-full rounded-md' : "hover:text-white w-full rounded-md bg-red-600 border-2 border-red-600 hover:border-2 hover:border-red-600"}`}>Create Account</Button>
            </Link>
            <p className="text-center my-4">OR</p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-600 text-white">
              <FaFacebook size={25} className=" mr-3" />
              SIGN IN WITH FACEBOOK
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-blue-500 text-white">
              <AiFillTwitterCircle size={25} className=" mr-3" />
              SIGN IN WITH TWITTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
