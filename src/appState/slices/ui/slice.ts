import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "i18next";
import { UIState } from "../appState.types";

const initialState: UIState = {
  mode: "light",
  language: "ar",
  nameSpace: "",
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
    setNameSpace(state, action: PayloadAction<string>) {
      return { ...state, nameSpace: action.payload };
    },
  },
});

export const { changeThemeMode, setLanguage, setNameSpace } = slice.actions;
export default slice.reducer;
