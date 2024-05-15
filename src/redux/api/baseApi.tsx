import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TagTypeList } from "../TagTypes";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://ecomarce-back-9.onrender.com/",
    baseUrl: "http://localhost:5000/",
  }),
  //end
  endpoints: (builder) => ({}),
  tagTypes: TagTypeList,
});
