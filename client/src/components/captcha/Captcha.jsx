import { useState } from "react";
import { LoadCanvasTemplate } from "react-simple-captcha";
import { submitCaptcha } from "../../shared/functions/submitCaptcha";
import { useDispatch } from "react-redux";
import { enterCaptcha } from "../../redux/cart/cart-slice";

import styles from "./Captcha.module.scss";

const Captcha = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState("");
	const [isCaptcha, setIsCaptcha] = useState(false);
	const clearInput = () => setText("");

	dispatch(enterCaptcha(isCaptcha));
	return (
		<div className={styles.captcha}>
			<LoadCanvasTemplate />
			<input
				className={styles.input}
				type="text"
				name="captcha"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button
				onClick={() => submitCaptcha(text, clearInput, setIsCaptcha)}
				className={styles.btn}
			>
				Submit
			</button>
		</div>
	);
};

export default Captcha;
