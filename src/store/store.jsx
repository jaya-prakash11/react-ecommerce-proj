import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productslice";
export default configureStore({
  reducer: {
    products: productSlice,
  },
});
