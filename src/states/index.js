import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import preloadReducer from "./preload/reducer";
import usersReducer from "./users/reducer";
import threadsReducer from "./thread/reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    preload: preloadReducer,
    users: usersReducer,
    threads: threadsReducer,
  },
});

export default store;
