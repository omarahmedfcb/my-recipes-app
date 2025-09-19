import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    value: [],
  },
  reducers: {
    toggleFavorites: (state, action) => {
      let item = state.value.find((element) => element.id == action.payload.id);
      if (!item) {
        state.value.push(action.payload);
      } else {
        state.value.splice(state.value.indexOf(item), 1);
      }
    },
    setFavorites: (state, action) => {
      state.value = action.payload;
    },
    clearFavorites: (state) => {
      state.value = [];
    },
  },
});

export const { toggleFavorites, clearFavorites, setFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
