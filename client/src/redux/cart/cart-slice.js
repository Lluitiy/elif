import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	shop: "",
	products: [],
	loading: false,
	error: null,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { productId } = action.payload;
			console.log("productId", action);
			state.products.push(productId);
		},
		setCurrentShop: (state, action) => {
			const { id } = action.payload;
			state.shop = id;
			console.log("shopId", action);
		},
	},
	extraReducers: {},
});

export const { addToCart, setCurrentShop } = cartSlice.actions;
export default cartSlice.reducer;
