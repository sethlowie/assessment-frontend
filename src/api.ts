import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PageResponse } from "./data";
import { configureStore } from "@reduxjs/toolkit";

const dataApi = createApi({
    reducerPath: "dataApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),
    endpoints: (builder) => ({
        getPageInfo: builder.query<PageResponse, string>({
            query: (id) => `/page/${id}`,
        }),
    }),
});

export const { useGetPageInfoQuery } = dataApi;

export const store = configureStore({
    reducer: {
        [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getDefaultMiddlerware) => getDefaultMiddlerware().concat(dataApi.middleware),
});
