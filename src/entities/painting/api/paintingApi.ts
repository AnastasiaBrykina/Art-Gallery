import { baseApi } from "../../../shared/api/index";
import { Paint } from "../model/types";

export const paintingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    paintings: build.query<
      Paint[],
      { value: string; page?: number; limit?: number }
    >({
      query: (params) => {
        const { value, page, limit } = params;
        return {
          url: "/paintings",
          params: {
            q: value,
            _page: page,
            _limit: limit,
          },
        };
      },
    }),
  }),
});

export const { usePaintingsQuery } = paintingApi;
