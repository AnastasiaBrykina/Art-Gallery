import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@app/appStore";
import { type Theme } from "../model/types";

type ThemeSliceState = {
  currentTheme: Theme;
};

const initialState: ThemeSliceState = {
  currentTheme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const selectCurrentTheme = (state: RootState) =>
  state.theme.currentTheme;
