"use client";
import { useAppSelector } from "@/redux/hook";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Provide from "./Provide";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Provide>{children}</Provide>
    </Provider>
  );
};

export default Providers;
