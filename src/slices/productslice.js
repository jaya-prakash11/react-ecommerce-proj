import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productAndCategory: {
    allProducts: [],
    isLoading: false,
    categoryList: [],
  },
};

const BASE_URL = "https://api.escuelajs.co/api/v1/";

//GET
export const fetchAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    const res = await axios(BASE_URL + "products");
    if (res.statusText == "OK") {
      const data = await res.data;
      return data;
    } else {
      rejectWithValue("problem in get products");
    }
  }
);

export const fetchAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async (_, { rejectWithValue }) => {
    const res = await axios(BASE_URL + "categories");
    if (res.statusText == "OK") {
      const data = await res.data;
      return data;
    } else {
      rejectWithValue("problem in get categories");
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducer: {},
  extraReducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.productAndCategory.isLoading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.productAndCategory.isLoading = false;
      state.productAndCategory.allProducts = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.productAndCategory.isLoading = false;
      state.productAndCategory.error = action.error.message;
    });
    builder.addCase(fetchAllCategory.pending, (state) => {
      state.productAndCategory.isLoading = true;
    });
    builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
      state.productAndCategory.isLoading = false;
      state.productAndCategory.categoryList = action.payload.map((res) => {
        return { name: res.name };
      });
    });
    builder.addCase(fetchAllCategory.rejected, (state, action) => {
      state.productAndCategory.isLoading = false;
      state.productAndCategory.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
