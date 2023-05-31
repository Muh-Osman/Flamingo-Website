import { createSlice } from "@reduxjs/toolkit";

export const moreBtnSlice = createSlice({
  name: "moreBtn",
  initialState: {
    homeMoreBtn: false,
    phoneMoreBtn: false,
    gamingMoreBtn: false,
    watchesMoreBtn: false,
    camerasMoreBtn: false,
    computersMoreBtn: false,
    tabletsMoreBtn: false,
    tvsMoreBtn: false,
    accessoriesMoreBtn: false,
    // Navbar "More" Button
    navbarMoreBtn: false
  },
  reducers: {
    hideHomeMoreBtn: (state) => {
      state.homeMoreBtn = true;
    },
    hidePhoneMoreBtn: (state) => {
      state.phoneMoreBtn = true;
    },
    hideGamingMoreBtn: (state) => {
      state.gamingMoreBtn = true;
    },
    hideWatchesMoreBtn: (state) => {
      state.watchesMoreBtn = true;
    },
    hideCamerasMoreBtn: (state) => {
      state.camerasMoreBtn = true;
    },
    hideComputersMoreBtn: (state) => {
      state.computersMoreBtn = true;
    },
    hideTabletsMoreBtn: (state) => {
      state.tabletsMoreBtn = true;
    },
    hideTvsMoreBtn: (state) => {
      state.tvsMoreBtn = true;
    },
    hideAccessoriesMoreBtn: (state) => {
      state.accessoriesMoreBtn = true;
    },
    // Navbar "More" Button
    hideNavbarMoreBtn: (state) => {
      state.navbarMoreBtn = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  hideHomeMoreBtn,
  hidePhoneMoreBtn,
  hideGamingMoreBtn,
  hideWatchesMoreBtn,
  hideCamerasMoreBtn,
  hideComputersMoreBtn,
  hideTabletsMoreBtn,
  hideTvsMoreBtn,
  hideAccessoriesMoreBtn,
  // Navbar "More" Button
  hideNavbarMoreBtn

} = moreBtnSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectHomeBtn = (state) => state.moreBtn.homeMoreBtn;
export const selectPhoneBtn = (state) => state.moreBtn.phoneMoreBtn;
export const selectGamingBtn = (state) => state.moreBtn.gamingMoreBtn;
export const selectWatchesBtn = (state) => state.moreBtn.watchesMoreBtn;
export const selectCamerasBtn = (state) => state.moreBtn.camerasMoreBtn;
export const selectComputersBtn = (state) => state.moreBtn.computersMoreBtn;
export const selectTabletsBtn = (state) => state.moreBtn.tabletsMoreBtn;
export const selectTvsBtn = (state) => state.moreBtn.tvsMoreBtn;
export const selectAccessoriesBtn = (state) => state.moreBtn.accessoriesMoreBtn;
// Navbar "More" Button
export const selectNavbarBtn = (state) => state.moreBtn.navbarMoreBtn;

export default moreBtnSlice.reducer;
