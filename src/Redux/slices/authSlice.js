
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userId: null,
    role:null,
  },
  reducers: {
    setAuth(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.role = action.payload.role;
    },
    clearAuth(state) {
      state.token = null;
      state.userId = null;
      state.role = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
