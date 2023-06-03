import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const instance = axios.create({
	baseURL: BASE_URL,
});

export const getShops = async () => {
	const { data } = await instance.get("/shops");
	return data;
};
export default instance;
