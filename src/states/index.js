import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
import preloadReducer from './preload/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './thread/reducer';
import threadDetailReducer from './threadDetail/reducer';
import commentReducer from './comment/reducer';
import { loadingBarReducer } from '@dimasmds/react-redux-loading-bar';

const store = configureStore({
  reducer: {
    auth: authReducer,
    preload: preloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    comment: commentReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
