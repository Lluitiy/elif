import { useDispatch, useSelector } from "react-redux";
import {
	getCartPrice,
	getCurrentShop,
	getProductIdsInCart,
} from "../../redux/cart/cart-selectors";
import { allShops } from "../../redux/shop/shop-selectors";
import { setCartPrice } from "../../redux/cart/cart-slice";
import { calculateOrderPrice } from "../../shared/functions/calculateOrderPrice";

import Cart from "../../components/cart/Cart";
import Order from "../../components/Order/Order";
import OrderForm from "../../components/orderForm/OrderForm";

import styles from "./ShoppingCartPage.module.scss";

const ShoppingCartPage = () => {
	const dispatch = useDispatch();
	const shops = useSelector(allShops);
	const cartPrice = useSelector(getCartPrice);
	const currentShop = useSelector(getCurrentShop);
	const productIds = useSelector(getProductIdsInCart);

	const [shop] = shops.filter((shop) => shop._id === currentShop);
	const orderedProducts = Object.keys(productIds).map((el) => +el);

	const cartOrder = shop?.products?.filter((product) =>
		orderedProducts.includes(product._id)
	);

	if (shop && productIds) {
		const orderPrice = calculateOrderPrice(shop, productIds);
		dispatch(setCartPrice(orderPrice));
	}

	return (
		<div className="section">
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.form}>
						{/* map */}
						<OrderForm
							order={productIds}
							orderPlace={currentShop}
						/>
					</div>

					<div className={styles.rightWrapper}>
						<div className={styles.cart}>
							<Cart
								productIds={productIds}
								cartOrder={cartOrder}
							/>
						</div>
						<div className={styles.order}>
							<Order totalPrice={cartPrice} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCartPage;
