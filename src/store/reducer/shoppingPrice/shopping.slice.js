import { createSlice } from "@reduxjs/toolkit"
import { fetchPrice } from "./shopping.actions"

const initialState = {
    shopping: [],
    loadingShop: false
}

export const ShoppingSlice = createSlice({
    name: "shopping",
    initialState,

    reducers:{},

    extraReducers: builder => {
        builder
            .addCase(fetchPrice.pending, state => {
                state.loadingShop = true
            })

            .addCase(fetchPrice.fulfilled, (state, action) => {
                state.shopping = action.payload,
                state.loadingShop = false
            })

            .addCase(fetchPrice.rejected, state => {
                state.loadingShop = false
            })
    }
})

export default ShoppingSlice.reducer