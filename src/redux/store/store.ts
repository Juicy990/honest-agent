import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { companyApi } from "../services/CompanyService";
import { contactApi } from "../services/ContactService";
import authReducer from "./reducers/authReducer/AuthSlice";
import imageReducer from "./reducers/imageReducer/ImageSlice";

const rootReducer = combineReducers({
  authReducer,
  imageReducer,
  [companyApi.reducerPath]: companyApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(companyApi.middleware)
        .concat(contactApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
