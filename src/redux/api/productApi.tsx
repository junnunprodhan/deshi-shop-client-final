import { TProduct } from "@/Types/Global";
import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    createProduct: build.mutation({
      query: (data: any) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.products],
    }),
    getProducts: build.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: [tagTypes.products],
    }),
    deleteProduct: build.mutation({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.products],
    }),
    upProduct: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.products],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpProductMutation,
} = productApi;
