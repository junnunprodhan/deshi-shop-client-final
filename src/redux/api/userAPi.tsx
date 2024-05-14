import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "api/v1/register",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: build.mutation({
      query: (data) => ({
        url: "api/v1/login",
        method: "POST",
        body: data,
      }),
    }),
    fetchAllUser: build.query({
      query: (email) => ({
        url: `api/v1/user/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useFetchAllUserQuery,
} = userApi;
