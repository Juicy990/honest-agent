import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { ContactInterface } from "../types/ContactInterface";
import { token } from "../../helpers/services/Services";
import { apiURL } from "../../helpers/constants/URLConstant";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiURL + "contacts/",
  }),
  tagTypes: ["Contact"],
  endpoints: (build) => ({
    fetchContact: build.query<ContactInterface, number>({
      query: (id: number) => ({
        url: `${id}`,
        headers: {
          Authorization: token ?? undefined,
        },
      }),
      providesTags: () => ["Contact"],
    }),

    updateContact: build.mutation<
      ContactInterface,
      Partial<ContactInterface> & Pick<ContactInterface, "id">
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
      transformResponse: (response: { data: ContactInterface }) =>
        response.data,
      invalidatesTags: ["Contact"],
    }),
  }),
});
