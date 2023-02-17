import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersAPI = createApi({
  reducerPath: "charactersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (build) => ({
    getAllCharacters: build.query({
      query: ({ page }) => ({
        url: `/character?page=${page}`,
        method: "GET",
      }),
    }),

    getOneCharacter: build.query({
      query: ({ id }) => ({
        url: "/character/${id}",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetOneCharacterQuery } =
  charactersAPI;
