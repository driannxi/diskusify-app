import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import preloadReducer from "./preload/reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    preload: preloadReducer,
  },
});

export default store;
