import { createSlice } from "@reduxjs/toolkit";

type appState = {
  isMenuOpen: boolean;
};

const app = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state: appState): void => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state: appState): void => {
      state.isMenuOpen = false;
    },
    openMenu: (state: appState): void => {
      state.isMenuOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = app.actions;

export default app.reducer;
