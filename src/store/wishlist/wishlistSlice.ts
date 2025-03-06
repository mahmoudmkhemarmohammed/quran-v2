import { createSlice } from "@reduxjs/toolkit";

type TWishlistState = {
  itemsSurah: number[];
  itemsReciter: number[];
};

const initialState: TWishlistState = {
  itemsSurah: [],
  itemsReciter: [],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addReciterToWishlistToggle: (state, action) => {
      const id = action.payload;
      if (state.itemsReciter.includes(id)) {
        state.itemsReciter = state.itemsReciter.filter(
          (el) => el !== action.payload
        );
      } else {
        state.itemsReciter = state.itemsReciter = [
          ...state.itemsReciter,
          action.payload,
        ];
      }
    },
    addSurahToWishlistToggle: (state, action) => {
      const id = action.payload;
      if (state.itemsSurah.includes(id)) {
        state.itemsSurah = state.itemsSurah.filter(
          (el) => el !== action.payload
        );
      } else {
        state.itemsSurah = [...state.itemsSurah, action.payload];
      }
    },
  },
});

export const { addReciterToWishlistToggle, addSurahToWishlistToggle } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
