import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (cat) => {
    const res = await fetch(`http://localhost:9000/${cat}`);
    const data = await res.json();
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: null,
  name: "productsSlice",
  reducers: {
    // addProduct: (state, action) => {
    //     state.push(action.payload);
    //   },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log("API Fulfilled");
      return action.payload;
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      console.log("API Pending..");
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("API Rejected");
    });
  },
});

// export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
