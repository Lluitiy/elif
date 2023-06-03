import { validateCaptcha } from "react-simple-captcha";
import { toast } from "react-toastify";

export const submitCaptcha = (text, clearInput, setQ) => {
	if (validateCaptcha(text) == true) {
		toast.success("Captcha Matched");
		setQ(true);
	} else {
		toast.error(
			"Captcha Does Not Match. Captcha is case sensitive. Please try again."
		);
	}
	clearInput();
};
