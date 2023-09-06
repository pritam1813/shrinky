import { createSlice } from "@reduxjs/toolkit";

interface SignUpState {
  currentUser: null;
  loading: boolean;
  error: null | boolean;
}

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
} as SignUpState;

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    SignUpStart(state) {
      state.loading = true;
    },
    SignUpSuccess(state, action) {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    SignUpFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { SignUpStart, SignUpSuccess, SignUpFailure } =
  signupSlice.actions;
export default signupSlice.reducer;
