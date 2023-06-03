import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	shop: null,
	products: {},
	productTotalPrice: 0,
	isCaptcha: false,
	cartPrice: 0,
	loading: false,
	error: null,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const productId = action.payload;
			state.products[productId] = (state.products[productId] || 0) + 1;
		},
		setCurrentShop: (state, action) => {
			const id = action.payload;
			state.shop = id;
		},
		adjustCart: (state, action) => {
			const { id, amount } = action.payload;

			state.products[id] += amount;

			//remove item from the cart if user reduced the value to 0
			if (state.products[id] === 0) {
				state.products = Object.fromEntries(
					Object.entries(state.products).filter(
						([_, value]) => value !== 0
					)
				);
			}
		},
		setCartPrice: (state, action) => {
			state.cartPrice = action.payload;
		},
		enterCaptcha: (state, action) => {
			state.isCaptcha = action.payload;
		},
	},
	extraReducers: {},
});

export const {
	addToCart,
	setCurrentShop,
	adjustCart,
	setCartPrice,
	enterCaptcha,
} = cartSlice.actions;

export default cartSlice.reducer;
