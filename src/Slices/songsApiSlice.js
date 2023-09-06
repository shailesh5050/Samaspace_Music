import { apiSlice } from "./apiSlice";

export const songsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSongs: builder.query({
            query: () => `/songs`,
        }),
    }),
});

export const { useGetSongsQuery } = songsApiSlice;

