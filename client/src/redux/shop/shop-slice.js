import { createSlice } from "@reduxjs/toolkit";
import { getAllShops } from "./shop-operations";

const initialState = {
	shops: [],
	loading: false,
	error: null,
};

const shopSlice = createSlice({
	name: "shop",
	initialState,
	extraReducers: {
		[getAllShops.pending]: (store) => {
			store.loading = true;
			store.error = null;
		},
		[getAllShops.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.shops = payload;
		},
		[getAllShops.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
	},
});

export default shopSlice.reducer;
