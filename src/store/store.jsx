import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Slices/productslice";
export default configureStore({
  reducer: {
    products: productSlice,
  },
});
