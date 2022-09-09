import { createSlice } from "@reduxjs/toolkit";
import { FavoritesType } from "../../models";

const initialState:FavoritesType = {
  total: 0,
  favorites: []
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addToFavorites: (state,action) => {
      const index = state.favorites.findIndex((favorite) => favorite._id === action.payload._id);
      console.log(index);
      if(index !== -1){
        state.favorites.splice(index, 1);
        state.total = state.total - 1;
      }
      else{
        state.favorites.push(action.payload);
        state.total = state.total + 1;
      }
    } 
  }
})

export const { addToFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;