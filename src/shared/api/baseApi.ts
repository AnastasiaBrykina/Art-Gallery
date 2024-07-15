import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "base",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-front.framework.team",
    headers: {
      Accept: "application/json",
    },
  }),
  endpoints: () => ({}),
});
