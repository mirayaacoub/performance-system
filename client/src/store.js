// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/usersSlice';
import dialogReducer from './slices/dialogSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    dialog: dialogReducer,
  },
});

export default store;
