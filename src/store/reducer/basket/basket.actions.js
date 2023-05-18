import { createAsyncThunk } from "@reduxjs/toolkit";
import { BasketService } from "../../../services/basket.service";

export const AddBasket = createAsyncThunk(
    "fetch/basket",
    async () => {
        try {
            return await BasketService.renderBasket()
        } catch (error) {
            return error
        }
    }
)