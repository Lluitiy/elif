const Product = ({
	product,
	onClick,
	styles,
	BTN,
	shopId,
	amount,
	totalPrice = null,
}) => {
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
			<div className={styles.price}>
				{totalPrice && <div>{totalPrice} credits</div>}
				<BTN
					onClick={onClick}
					shopId={shopId}
					productId={product._id}
					amount={amount}
					totalPrice={totalPrice}
				/>
			</div>
		</>
	);
};

export default Product;
