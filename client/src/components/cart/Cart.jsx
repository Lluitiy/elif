import { totalPriceForProduct } from "../../shared/functions/totalPriceForProduct";

import AdjustAmount from "../adjustAmount/AdjustAmount";
import Product from "../product/Product";

import styles from "./Cart.module.scss";

const Cart = ({ cartOrder, productIds }) => {
	return (
		<>
			<ul className={styles.list}>
				{cartOrder?.map((product) => {
					const id = product._id;
					const price = product.price;
					const amount = productIds[id];
					const totalPrice = totalPriceForProduct(amount, price);

					return (
						<li key={id} className={styles.item}>
							<Product
								product={product}
								BTN={AdjustAmount}
								amount={amount}
								styles={styles}
								totalPrice={totalPrice}
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Cart;
