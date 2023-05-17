import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShoppingService } from "../../../services/shoppingPrice.service";

export const fetchPrice = createAsyncThunk(
    "shoping/price",
    async ( ) => {
        try {
            return await ShoppingService.PriceRender()
        } catch (error) {
            return error
        }
    }
)