import { useParams } from "react-router-dom";
import { shops } from "../../data/shops";
import { useDispatch } from "react-redux";
import { addToCart, setCurrentShop } from "../../redux/cart/cart-slice";

import AddToCartBtn from "../addToCartBtn/AddToCartBtn";
import Product from "../product/Product";

import styles from "./Products.module.scss";

const Products = () => {
	const dispatch = useDispatch();
	const params = useParams();

	const [currentShop] = shops.filter((shop) => shop.route === params.route);

	const onAddProduct = (productId, shopId) => {
		dispatch(addToCart(productId));
		dispatch(setCurrentShop(shopId));
	};
	return (
		<>
			<ul className={styles.list}>
				{currentShop.products.map((product) => (
					<li key={product.id} className={styles.item}>
						<Product
							shopId={currentShop.id}
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
