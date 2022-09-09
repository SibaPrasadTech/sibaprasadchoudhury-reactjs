import { createSlice } from "@reduxjs/toolkit";
import { FavoritesType } from "../../models";

const initialState:FavoritesType = {
  total: 0,
  favorites: []
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addToFavorites: (state,action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state,action) => {

    }
  }
})