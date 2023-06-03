import { useEffect } from "react";
import { loadCaptchaEnginge } from "react-simple-captcha";

import Captcha from "../captcha/Captcha";

import styles from "./Order.module.scss";

const Order = ({ totalPrice }) => {
	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.top}>
				<Captcha />
			</div>
			<div className="">
				<div className="totalprice">{totalPrice} Credits</div>
			</div>
		</div>
	);
};

export default Order;
