import { themeSlice } from "@entities/theme";

import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api";

export const appStore = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
