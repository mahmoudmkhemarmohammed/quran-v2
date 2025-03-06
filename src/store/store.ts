import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import wishlist from "./wishlist/wishlistSlice";
import toasts from "./toasts/toastsSlice"
import storage from "redux-persist/lib/storage";

const wishlistConfig = {
  key: "wishlist",
  storage,
};

const rootReducer = {
  wishlist: persistReducer(wishlistConfig, wishlist),
  toasts
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PURGE, PERSIST, PAUSE, REGISTER, REHYDRATE],
      },
    });
  },
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
