import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_CRYPTOCURRENCIES_API_KEY,
  "X-RapidAPI-Host": "news67.p.rapidapi.com",
  // "X-BingApis-SDK": "alskalsk",
  // "X-RapidAPI-Key": "kasaksjajkskja",
  // "X-RapidAPI-Host": "aksaksak",
};

const baseUrl = "https://news67.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`/v2/crypto`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
