import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer, // the cryptoApi slice
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer, // the cryptoNewsApi slice
  },
  // Add middleware to the store that includes both the cryptoApi and cryptoNewsApi middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware
    ),
});
