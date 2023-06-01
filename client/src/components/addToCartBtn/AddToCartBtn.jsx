import styles from "./AddToCartBtn.module.scss";

const AddToCartBtn = ({ onClick, productId, shopId }) => {
	return (
		<>
			<button
				className={styles.btn}
				onClick={() => onClick(productId, shopId)}
			>
				<p className={styles.text}>Add to cart</p>
			</button>
		</>
	);
};

export default AddToCartBtn;
