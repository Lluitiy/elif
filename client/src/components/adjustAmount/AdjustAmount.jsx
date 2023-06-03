import { useState } from "react";
import { useDispatch } from "react-redux";
import { adjustCart } from "../../redux/cart/cart-slice";

const AdjustAmount = ({ amount, productId }) => {
	const dispatch = useDispatch();
	const [previousAmount, setPreviousAmount] = useState(amount);

	const onChange = (e) => {
		const amount = e.target.value;
		const id = e.target.id;

		setPreviousAmount(amount);
		const difference = amount - previousAmount;

		dispatch(adjustCart({ id: id, amount: difference }));
	};
	return (
		<input
			type="number"
			min="0"
			id={productId}
			value={amount}
			onChange={(e) => onChange(e)}
		/>
	);
};

export default AdjustAmount;
