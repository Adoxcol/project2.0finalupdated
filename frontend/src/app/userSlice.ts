// src/features/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;