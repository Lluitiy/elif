import { validateCaptcha } from "react-simple-captcha";
import { toast } from "react-toastify";

export const submitCaptcha = (text, clearInput) => {
	if (validateCaptcha(text) == true) {
		toast.success("Captcha Matched");
	} else {
		toast.error(
			"Captcha Does Not Match. Captcha is case sensitive. Please try again."
		);
	}
	clearInput();
};
