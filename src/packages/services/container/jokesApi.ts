import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetJokesByPhraseResponse } from "../../types";

export const jokesApi = createApi({
  reducerPath: "jokesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://icanhazdadjoke.com/" }),
  endpoints: (builder) => ({
    getJokesByPhrase: builder.query<GetJokesByPhraseResponse, string>({
      query: (phrase) => ({
        url: `search?term=${phrase}`,
        headers: { accept: "application/json" },
      }),
    }),
  }),
});

export const { useGetJokesByPhraseQuery, useLazyGetJokesByPhraseQuery } =
  jokesApi;
