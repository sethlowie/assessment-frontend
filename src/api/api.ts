import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PageResponse, pageResponseSchema } from "./data";
import { weatherDetailsResponse, WeatherDetailsResponse } from "./weather";
import { configureStore } from "@reduxjs/toolkit";

const dataApi = createApi({
    reducerPath: "dataApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),
    endpoints: (builder) => ({
        getPageInfo: builder.query<PageResponse, string>({
            query: (id) => `/page/${id}`,
            transformResponse: (response: unknown) => pageResponseSchema.parse(response),
        }),
        getWeatherInfo: builder.query<WeatherDetailsResponse, { lat: string; lon: string }>({
            query: ({ lat, lon }) => `/integration/weather?lat=${lat}&lon=${lon}`,
            transformResponse: (response: unknown) => weatherDetailsResponse.parse(response),
        }),
    }),
});

export const { useGetPageInfoQuery, useGetWeatherInfoQuery } = dataApi;

export const store = configureStore({
    reducer: {
        [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getDefaultMiddlerware) => getDefaultMiddlerware().concat(dataApi.middleware),
});
