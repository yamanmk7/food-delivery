import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart:[],
    },
    reducers: {
        addCart: (state, action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity ++;
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeCart: (state, action) => {
            const removeFromeCart = state.cart.filter(item => item.id !== action.payload.id);
            state.cart = removeFromeCart;
        },
        incrementQuantity: (state, action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            itemInCart++;
        },
        decrementQuantity: (state, action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if(itemInCart.quantity == 1) {
               const removeFromeCart = state.cart.filter(item => item.id !== action.payload.id);
                state.cart = removeFromeCart;
            }
            else {
                itemInCart.quantity--;
            }

        }

    },
});

export const { addCart, removeCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
  export default cartSlice.reducer;