import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./reducer/basket/basket.slice";
import shopReducer from "./reducer/shop/shop.slice";
import shoppingReducer from "./reducer/shoppingPrice/shopping.slice";

export const store = configureStore({
    reducer: {
        shop: shopReducer,
        shopping: shoppingReducer,
        basket: BasketReducer
    },
    devTools: true
})