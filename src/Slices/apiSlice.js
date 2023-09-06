import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://cms.samespace.com/items'}),
    tagTypes: ['Songs'],
    endpoints: (builder) => ({}),
});
