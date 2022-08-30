import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CompanyInterface } from "../types/CompanyInterface";
import { token } from "../../helpers/services/Services";
import { apiURL } from "../../helpers/constants/URLConstant";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiURL + "companies/",
  }),
  tagTypes: ["Company"],
  endpoints: (build) => ({
    fetchCompany: build.query<CompanyInterface, number>({
      query: (id: number) => ({
        url: `${id}`,
        headers: {
          Authorization: token ?? undefined,
        },
      }),
    }),

    deleteCompany: build.mutation<CompanyInterface, CompanyInterface>({
      query: (company) => ({
        url: `${company.id}`,
        method: "DELETE",
        headers: {
          Authorization: token ?? undefined,
        },
      }),
      invalidatesTags: ["Company"],
    }),

    updateCompany: build.mutation<
      CompanyInterface,
      Partial<CompanyInterface> & Pick<CompanyInterface, "id">
    >({
      query: ({ id, ...patch }) => ({
        url: `${id}`,
        method: "PATCH",
        headers: {
          Authorization: token ?? undefined,
          "Content-Type": "application/json",
        },
        body: patch,
      }),
      transformResponse: (response: { data: CompanyInterface }) =>
        response.data,
      invalidatesTags: ["Company"],
    }),
  }),
});
