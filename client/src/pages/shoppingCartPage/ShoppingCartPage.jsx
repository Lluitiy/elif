import { useState } from "react";
import Cart from "../../components/cart/Cart";
import Order from "../../components/Order/Order";
import OrderForm from "../../components/orderForm/OrderForm";
import { shops } from "../../data/shops";

import styles from "./ShoppingCartPage.module.scss";

const ShoppingCartPage = ({ cart, setCart }) => {
	const [shop] = shops.filter((shop) => shop.id === cart.shop);

	const prices = {};
	const quantities = {};

	let totalPrice = 0;

	const [discounted, setDiscounted] = useState(totalPrice);

	shop?.products.map((el) => {
		if (cart?.productIds.includes(el.id)) {
			prices[el.id] = prices[el.id] || 0 || el.price;
		}
	});
	cart?.productIds.map((id) => (quantities[id] = (quantities[id] || 0) + 1));

	for (const product in quantities) {
		if (
			quantities.hasOwnProperty(product) &&
			prices.hasOwnProperty(product)
		) {
			const quantity = quantities[product];
			const price = prices[product];

			totalPrice += quantity * price;
		}
	}

	const onGetDiscount = () => {
		return setDiscounted(Math.ceil(totalPrice - totalPrice * 0.2));
	};

	return (
		<div className="section">
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.form}>
						{/* map */}
						<OrderForm />
					</div>

					<div className={styles.rightWrapper}>
						<div className={styles.cart}>
							<Cart cart={cart}></Cart>
						</div>
						<Order
							onGetDiscount={onGetDiscount}
							totalPrice={totalPrice}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCartPage;
