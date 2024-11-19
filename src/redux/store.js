import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { baseApi } from "./api/baseApi";
import authSlice from "./features/authSlice";
import adminAuthSlice from "./features/adminAuthSlice";
import otpSlice from "./features/otp/otpSlice";
import sidebarToggleSlice from "./features/toggleSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuth = persistReducer(persistConfig, authSlice);
const persistedAdminAuth = persistReducer(persistConfig, adminAuthSlice);
const persisetOTP = persistReducer(persistConfig, otpSlice);

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: persistedAuth,
  admin: persistedAdminAuth,
  otpData: persisetOTP,
  sidebarToggle: sidebarToggleSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredActionPaths: ["register"],
        ignoredPaths: ["register"],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
