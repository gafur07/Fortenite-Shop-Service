import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShopSerivec } from "../../../services/shop.service";

export const shopRender = createAsyncThunk(
    "shop/fetch",
    async ( ) => {
        try {
            return await ShopSerivec.fetchShop()
        } catch (error) {
            return thumbApi.re("Heloo")
        }
    }
)