import { useSelector } from "react-redux";
import { shops } from "../../data/shops";
import {
	getCurrentShop,
	getProductIdsInCart,
} from "../../redux/cart/cart-selectors";
import Product from "../product/Product";

import styles from "./Cart.module.scss";
const Cart = () => {
	const productIds = useSelector(getProductIdsInCart);
	const currentShop = useSelector(getCurrentShop);
	
	const [products] = shops.filter((shop) => shop.id === currentShop);

	return (
		<>
			<ul>
				{products?.map((product) => (
					<li key={product.id} className={styles.item}>
						<Product
							product={product}
							// BTN={AddToCartBtn}
							// onClick={onAddProduct}
							styles={styles}
						/>
					</li>
				))}
			</ul>
		</>
	);
};

export default Cart;
