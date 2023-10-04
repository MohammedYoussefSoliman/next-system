import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import loGet from "lodash/get";
import { CategoriesState } from "../appState.types";
import categoriesService from "./categoriesService";

const initialState: CategoriesState = {
  mainCategories: [],
  subCategories: [],
};

const slice = createSlice({
  name: "app/categories",
  initialState,
  reducers: {},
  extraReducers: {
    [categoriesService.fulfilled.type]: (
      state: CategoriesState,
      action: PayloadAction<any>
    ) => {
      const allCategories = loGet(action, "payload.data.categories", []);
      const subCategories: CategoriesState["mainCategories"] =
        allCategories.filter((category: any) => category.parent_id);
      const mainCategories: CategoriesState["mainCategories"] =
        allCategories.filter((category: any) => !category.parent_id);
      return {
        ...state,
        subCategories,
        mainCategories,
      };
    },
    [categoriesService.rejected.type]: () => initialState,
  },
});

export { categoriesService };

export default slice.reducer;
