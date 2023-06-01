import { useEffect } from "react";
import { loadCaptchaEnginge } from "react-simple-captcha";

import Captcha from "../captcha/Captcha";
import Discount from "../discount/Discount";

import styles from "./Order.module.scss";

const Order = ({ onGetDiscount,totalPrice }) => {
	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);
	return (
		<>
			<div className={styles.top}>
				<Discount onGetDiscount={onGetDiscount} />
				<Captcha />
			</div>
			<div className="">
				<div className="totalprice">{totalPrice} Credits</div>
				<div className="orderbtn">orderbtn</div>
			</div>
		</>
	);
};

export default Order;
