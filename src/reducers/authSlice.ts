import { createSlice } from "@reduxjs/toolkit";

interface authState {
  currentUser: null;
  loading: boolean;
  error: null | boolean;
}

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
} as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupStart(state) {
      state.loading = true;
    },
    signupSuccess(state, action) {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    signupFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure } = authSlice.actions;
export default authSlice.reducer;
