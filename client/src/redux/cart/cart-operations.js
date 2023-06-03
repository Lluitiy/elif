import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../api/cart";

export const addOrder = createAsyncThunk(
	"user/addOrder",
	async (data, { rejectWithValue }) => {
		try {
			const result = await api.addOrder(data);
			return result;
		} catch ({ response }) {
			const { status, data } = response;
			const error = {
				status,
				message: data.message,
			};
			return rejectWithValue(error);
		}
	}
);
