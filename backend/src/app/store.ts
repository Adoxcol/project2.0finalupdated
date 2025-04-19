// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import userReducer from '../app/userSlice';
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});