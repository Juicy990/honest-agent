import { apiURL } from "./../../../../helpers/constants/URLConstant";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutUser = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("usertoken");
  localStorage.setItem("loggedIn", "false");
};

export const loginUser = createAsyncThunk("auth/login", async (_, thunkAPI) => {
  try {
    const response = await axios.get<string>(apiURL + "auth", {
      params: {
        user: localStorage.getItem("username"),
      },
    });
    if (response.status === 200) {
      localStorage.setItem("usertoken", response.headers.authorization);
      localStorage.setItem("loggedIn", "true");
    } else {
      localStorage.setItem("loggedIn", "false");
    }

    return response.headers;
  } catch (error: any) {
    return thunkAPI.rejectWithValue("Не удалось загрузить данные");
  }
});
