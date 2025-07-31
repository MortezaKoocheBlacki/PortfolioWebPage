import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../utils/features/product/productSlice"

import cartReducer from "../../utils/features/cart/cartSlice.js"

const store = configureStore({
      reducer: {
            product: productReducer,
            cart: cartReducer
      }
});

export default store;