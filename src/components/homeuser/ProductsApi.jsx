
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const menu_itemsApi = createApi({
  reducerPath: "menu_itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ror-meals.onrender.com/" }),
  endpoints: (builder) => ({
    getAllMenu_items: builder.query({
      query: () => `menu_items`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMenu_itemsQuery } = menu_itemsApi;