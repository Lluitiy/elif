import { useState } from "react";
import styles from "./Discount.module.scss";

const Discount = ({ onGetDiscount }) => {
	const [code, setCode] = useState("");

	return (
		<div className={styles.discount}>
			<input
				type="text"
				value={code}
				className={styles.input}
				placeholder="Discount code"
				onChange={(e) => setCode(e.target.value)}
			/>
			<button
				type="button"
				className={styles.btn}
				// onClick={onGetDiscount}
			>
				Use
			</button>
		</div>
	);
};

export default Discount;
