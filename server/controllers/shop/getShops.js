const Shop = require("../../models/shopSchema");

const getShops = async (req, res) => {
	const shops = await Shop.find();

	if (shops.length > 0) {
		res.status(200).json(shops);
	} else {
		res.status(404).json({ error: "No shops found" });
	}
};

module.exports = getShops;
