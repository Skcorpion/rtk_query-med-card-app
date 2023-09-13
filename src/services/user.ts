import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { User } from './types'

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => `user`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
