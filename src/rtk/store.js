import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import newSecProductsSlice from "./slices/newSecProducts-slice";
import moreBtnSlice from "./slices/bigMoreBtn-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,

    newSecProducts: newSecProductsSlice,

    moreBtn: moreBtnSlice,

  },
});
