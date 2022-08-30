import { apiURL } from "./../../../../helpers/constants/URLConstant";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PhotoInterface } from "../../../types/PhotoInterface";
import { token } from "../../../../helpers/services/Services";

const companyId = 12;

export const uploadImage = createAsyncThunk(
  "image/upload",
  async (img: string | Blob, thunkAPI) => {
    try {
      const data = new FormData();
      data.append("file", img);
      const response = await axios.post<PhotoInterface>(
        apiURL + `companies/${companyId}/image`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token || "",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Не удалось загрузить данные");
    }
  }
);

export const removeImage = createAsyncThunk(
  "image/remove",
  async (imgName: string[] | string, thunkAPI) => {
    try {
      const response = await axios.delete<string[]>(
        apiURL + `companies/${companyId}/image/${imgName}`,
        {
          headers: {
            Authorization: token || "",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Не удалось загрузить данные");
    }
  }
);
