import { configureStore } from "@reduxjs/toolkit";
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import cartReducer from "./cart/cart-slice";
import shopReducer from "./shop/shop-slice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		shop: shopReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});
