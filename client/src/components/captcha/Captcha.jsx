import { useState } from "react";
import { LoadCanvasTemplate } from "react-simple-captcha";
import { submitCaptcha } from "../../shared/functions/submitCaptcha";

import styles from "./Captcha.module.scss";

const Captcha = () => {
	const [text, setText] = useState("");
	const clearInput = () => setText("");
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
				onClick={() => submitCaptcha(text, clearInput)}
				className={styles.btn}
			>
				Submit
			</button>
		</div>
	);
};

export default Captcha;
