import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, setCurrentShop } from "../../redux/cart/cart-slice";

import AddToCartBtn from "../addToCartBtn/AddToCartBtn";
import Product from "../product/Product";

import styles from "./Products.module.scss";
import { allShops } from "../../redux/shop/shop-selectors";

const Products = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const shops = useSelector(allShops);

	const [currentShop] = shops.filter((shop) => shop.route === params.route);

	const onAddProduct = (productId, shopId) => {
		dispatch(addToCart(productId));
		dispatch(setCurrentShop(shopId));
	};
	return (
		<>
			<ul className={styles.list}>
				{currentShop?.products?.map((product) => (
					<li key={product._id} className={styles.item}>
						<Product
							shopId={currentShop._id}
							product={product}
							BTN={AddToCartBtn}
							onClick={onAddProduct}
							styles={styles}
						/>
					</li>
				))}
			</ul>
		</>
	);
};

export default Products;
