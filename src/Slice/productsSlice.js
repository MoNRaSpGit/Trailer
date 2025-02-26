import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: 1, name: 'Hamburguesa', price: 1500 },
        { id: 2, name: 'Pizza', price: 2000 },
        { id: 3, name: 'Napolitana', price: 1800 },
        { id: 4, name: 'Pancho', price: 1000 },
        { id: 5, name: 'Burrito', price: 1700 },
    ],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
    },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
