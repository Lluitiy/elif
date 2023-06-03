const Shop = require("../../models/shopSchema");

const addShop = async (req, res) => {
	try {
		const { name, route, products } = req.body;

		const newShop = new Shop({
			name,
			route,
			products,
		});

		res.status(200).json(newShop);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = addShop;
