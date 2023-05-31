import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:9000";
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (cat) => {
    const res = await fetch(`${BASE_URL}/${cat}`);
    const data = await res.json();
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: { entities: [] },
  name: "productsSlice",
  reducers: {
    // addProduct: (state, action) => {
    //     state.push(action.payload);
    //   },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log("API Fulfilled");

      // ...state.entities = Old data
      // ...action.payload = new data

      // get the category param from fetchProducts function (home, phone, camera...)
      const cat = action.meta.arg;
      // use it to update the state
      state.entities = {
        ...state.entities,
        [cat]: { ...action.payload },
      };
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
