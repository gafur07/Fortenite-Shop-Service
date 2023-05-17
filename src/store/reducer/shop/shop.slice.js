import { createSlice } from "@reduxjs/toolkit"
import { shopRender } from "./shop.actions"

const initialState = {
    shop: [],
    loading: false
}

export const shopSlice = createSlice({
    name: "shop",
    initialState,

    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(shopRender.pending, state => {
                state.loading = true
            })
            .addCase(shopRender.fulfilled, (state, action) => {
                state.shop = action.payload,
                state.loading = false
            })
            .addCase(shopRender.rejected, state => {
                state.loading = false
            })
    }
})

export default shopSlice.reducer