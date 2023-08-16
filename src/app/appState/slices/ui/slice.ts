import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "i18next";
import { UIState } from "../appState.types";

const initialState: UIState = {
  mode: "light",
  language: "ar",
};

const slice = createSlice({
  name: "app/ui",
  initialState,
  reducers: {
    changeThemeMode(state, action: PayloadAction<UIState["mode"]>) {
      return { ...state, mode: action.payload };
    },

    setLanguage(state, action: PayloadAction<UIState["language"]>) {
      i18n.changeLanguage(action.payload);
      return { ...state, language: action.payload };
    },
  },
});

export const { changeThemeMode, setLanguage } = slice.actions;
export default slice.reducer;
