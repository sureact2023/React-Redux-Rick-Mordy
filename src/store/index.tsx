import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { charactersAPI } from "./API/charactersAPI";

export const store = configureStore({
  reducer: {
    [charactersAPI.reducerPath] : charactersAPI.reducer
  },
  middleware:(getDefaultMiddleware) =>{
      return getDefaultMiddleware().concat(charactersAPI.middleware)
  },
});

setupListeners(store.dispatch)