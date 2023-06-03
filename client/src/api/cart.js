import instance from "./shop";

export const addOrder = async (data) => {
	const { data: result } = await instance.post("/cart", data);
	return result;
};
