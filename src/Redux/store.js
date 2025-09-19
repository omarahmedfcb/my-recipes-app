import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
import favoritesReducer from "./favoritesSlice";
import loggedLocalReducer from "./loggedLocalSlice";
// import loggedLocalMiddleware from "../Middleware/loggedLocalMiddleware";
// import favoritesMiddleware from "../Middleware/favoritesMiddleware";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import loggedLocalMiddleware from "../Middleware/loggedLocalMiddleware";
const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["favorites"],
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const rootReducer = combineReducers({
  loggedLocal: loggedLocalReducer,
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const myStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(loggedLocalMiddleware),
});

export const persistor = persistStore(myStore);
