import { baseApi } from "../../../shared/api/index";
import { Location } from "../model/types";

export const locationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    location: build.query<Location[], void>({
      query: () => ({
        url: "/locations",
      }),
    }),
  }),
});

export const { useLocationQuery } = locationApi;
