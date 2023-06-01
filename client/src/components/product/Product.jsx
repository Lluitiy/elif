const Product = ({ product, BTN = null, onClick, styles, shopId }) => {
	return (
		<>
			<img
				src={product.img}
				alt={`${product.name} picture`}
				width={360}
				height={200}
				className={styles.img}
			/>
			<div className={styles.meta}>
				<p className={styles.name}>{product.name}</p>
			</div>
			{BTN && (
				<BTN onClick={onClick} shopId={shopId} productId={product.id} />
			)}
		</>
	);
};

export default Product;
