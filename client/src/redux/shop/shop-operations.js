import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../api/shop";

export const getAllShops = createAsyncThunk(
	"shops/getAll",
	async (_, { rejectWithValue }) => {
		try {
			const result = await api.getShops();
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
