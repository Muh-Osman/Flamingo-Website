import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewSecProducts = createAsyncThunk(
  "newSecProductsSlice/fetchProducts",
  async (cat) => {
    const res = await fetch(`http://localhost:9000/${cat}`);
    const data = await res.json();
    return data;
  }
);

export const newSecProductsSlice = createSlice({
  initialState: null,
  name: "newSecProductsSlice",
  reducers: {
    // addProduct: (state, action) => {
    //     state.push(action.payload);
    //   },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchNewSecProducts.fulfilled, (state, action) => {
      // console.log("NEW Sec API Fulfilled");
      return action.payload;
    });
    builder.addCase(fetchNewSecProducts.pending, (state, action) => {
      // console.log("NEW Sec API Pending..");
    });
    builder.addCase(fetchNewSecProducts.rejected, (state, action) => {
      console.log("NEW Sec API Rejected");
    });
  },
});

// export const { addProduct } = newSecProductsSlice.actions;
export default newSecProductsSlice.reducer;
