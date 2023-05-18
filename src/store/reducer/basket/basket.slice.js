import { createSlice } from "@reduxjs/toolkit"
// import { AddBasket } from "./basket.actions"

const initialState = {
    basket: []
}

export const BasketSlice = createSlice({
    name: "basket",
    initialState,

    reducers: {
        AddBasket: (state, action) => {
            if(state.basket.findIndex(item => item.id === action.payload.id) === -1) {
                state.basket = [action.payload, ...state.basket]
            }
        },
        removeBasket: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload)
        }
    },

    // extraReducers: builder => {
    //     builder
    //         .addCase(AddBasket.fulfilled, (state,action) => {
    //             if(state.basket.findIndex(item => item.id === action.payload.id) === -1) {
    //                 state.basket = [action.payload, ...state.basket]
    //             }
    //         })
    // }
})
export const { AddBasket, removeBasket } = BasketSlice.actions
export default BasketSlice.reducer