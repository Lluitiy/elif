import { toast } from "react-toastify";

export function copyText(ref) {
	const text = ref.current.textContent;

	navigator.clipboard
		.writeText(text.substring(1, text.length - 1))
		.then(() => {
			toast.success(`Code copied ${text}`);
		})
		.catch((error) => {
			toast.error(`Error copying text to clipboard:, ${error}`);
		});
}
