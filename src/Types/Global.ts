import { USER_ROLE } from "@/constanc/constant";
import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TInput = {
  type: string;
  edit: string;
  name: string;
  label: string;
};
export interface TSelectValue {
  value: string;
  label: string;
}
export type TBSelect = {
  options: TSelectValue[];
  edit: string;
  name: string;
  label: string;
  multi?: boolean;
};

export interface TProduct {
  _id: string;
  createdAt: string;
  discountEndDate: string;
  price: number;
  discountPrice: number;
  name: string;
  category: string;
  image: string;
  isFlash: boolean;
  description: string;
  stock: number;
  nutrients: {
    vitamins: string[];
    minerals: string[];
  };
  rating: number;
}

export interface TTopCard {
  category?: string;
  image?: string;
  name?: string;
  price?: number;
  discountPrice?: number;
  product?: TProduct;
  path: string;
}
export type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

export type TForm = {
  children: ReactNode;
  defaultValues?: any;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

export type UserRole = keyof typeof USER_ROLE;

export interface TOrder {
  productId: string;
  name: string;
  category: string;
  price: number;
  image: string;
  email: string;
  quantity: number;
}
