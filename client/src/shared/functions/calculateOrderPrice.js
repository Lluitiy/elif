export function calculateOrderPrice(shop, productIds) {
	let totalPrice = 0;

	for (const product of shop.products) {
		const productId = product._id.toString();

		if (productIds[productId]) {
			const amount = productIds[productId];
			totalPrice += product.price * amount;
		}
	}

	return totalPrice;
}
