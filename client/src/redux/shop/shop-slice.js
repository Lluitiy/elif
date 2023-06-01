import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	shops: [],
	loading: false,
	error: null,
};

const shopSlice = createSlice({
	name: "shop",
	initialState,
	extraReducers: {},
});

export default shopSlice.reducer;
