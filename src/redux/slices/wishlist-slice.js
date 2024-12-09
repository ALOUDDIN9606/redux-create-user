import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedUser: null, // Tanlangan foydalanuvchini saqlash uchun
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      state.items.push(action.payload);
    },
    removeFromWishlist(state, action) {
      state.items.splice(action.payload, 1);
    },
    editWishlistItem(state, action) {
      state.selectedUser = action.payload; // Foydalanuvchini tanlash
    },
    saveEditedWishlistItem(state, action) {
      const { index, updatedUser } = action.payload;
      state.items[index] = updatedUser;
      state.selectedUser = null; // Tanlangan foydalanuvchini qayta tozalash
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  editWishlistItem,
  saveEditedWishlistItem,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
