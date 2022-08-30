import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhotoInterface } from "../../../types/PhotoInterface";
import { removeImage, uploadImage } from "./ImageActions";

interface ImageState {
  file: PhotoInterface | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ImageState = {
  file: null,
  isLoading: false,
  error: null,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: {
    [uploadImage.fulfilled.type]: (
      state,
      action: PayloadAction<PhotoInterface>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.file = action.payload;
    },
    [uploadImage.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [uploadImage.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [removeImage.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = null;
      state.file = null;
    },
    [removeImage.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [removeImage.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default imageSlice.reducer;
