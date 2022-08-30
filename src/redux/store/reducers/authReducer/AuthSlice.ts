import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./AuthAction";

interface AuthState {
  userName: string | null;
  userToken: string | boolean | number | null;
  isLoading: boolean;
  error: string | null;
}

const userToken = localStorage.getItem("usertoken")
  ? localStorage.getItem("usertoken")
  : null;

const userName = localStorage.getItem("username")
  ? localStorage.getItem("username")
  : null;

const initialState: AuthState = {
  userName,
  userToken,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = null;
      state.userToken = action.payload;
    },
    [loginUser.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
