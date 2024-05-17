import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TagTypeList } from "../TagTypes";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://ecomarce-back-9.onrender.com/",
    baseUrl: "https://deshi-shop-server-final-2.onrender.com/",
  }),
  //end
  endpoints: (builder) => ({}),
  tagTypes: TagTypeList,
});
