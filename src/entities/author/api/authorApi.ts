import { baseApi } from "../../../shared/api";
import { Author } from "../model/types";

export const authorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    authors: build.query<Author[], void>({
      query: () => ({
        url: "/authors",
      }),
    }),
  }),
});

export const { useAuthorsQuery } = authorApi;
