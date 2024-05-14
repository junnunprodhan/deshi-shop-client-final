"use client";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { TForm, TFormConfig } from "@/Types/Global";

const BForm = ({ children, onSubmit, defaultValues, resolver }: TForm) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const { handleSubmit } = methods;

  const onSubmitHandler = (data: FieldValues) => {
    console.log(data)
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>{children}</form>
    </FormProvider>
  );
};

export default BForm;
