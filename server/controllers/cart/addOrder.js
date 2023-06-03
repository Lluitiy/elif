const { Cart } = require("../../models/cartSchema");

const addOrder = async (req, res) => {
	const { address, email, name, order, orderId, orderPlace, phone } =
		req.body;

	const newOrder = await Cart.create({
		address,
		email,
		name,
		order,
		orderId,
		orderPlace,
		phone,
	});

	res.status(201).json({
		order: {
			address: newOrder.address,
			email: newOrder.email,
			name: newOrder.name,
			order: newOrder.order,
			orderId: newOrder.orderId,
			orderPlace: newOrder.orderPlace,
			phone: newOrder.phone,
		},
	});
};

module.exports = addOrder;
