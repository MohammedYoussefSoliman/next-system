import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import uiSlice from "./slices/ui/slice";

const rootReducer = combineReducers({
  ui: uiSlice,
});

const persistConfig = {
  key: "mazaady-storage",
  storage: AsyncStorage,
  whitelist: ["ui", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware: any[] = [];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger();
  middleware.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
