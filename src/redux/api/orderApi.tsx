import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
    }),

    fetchAllOrder: build.query({
      query: () => ({
        url: `/order`,
        method: "GET",
      }),
    }),
    fetchOrder: build.query({
      query: (email) => ({
        url: `/order/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useFetchOrderQuery,
  useFetchAllOrderQuery,
} = orderApi;
