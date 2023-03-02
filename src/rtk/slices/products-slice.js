import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (cat) => {
    const res = await fetch(`http://localhost:9000/${cat}`);
    const data = await res.json();
    // console.log(data)
    return data;
  }
  );

  export const productsSlice = createSlice({
  initialState: null,
  name: "productsSlice",
  // reducers: {
  //   addProduct: (state, action) => {
  //     state.push(action.payload);
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(fetchProducts.pending, (state, action) => {
    // show loader here
    // });
    // builder.addCase(fetchProducts.rejected, (state, action) => {
    // show loader here
    // });
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
