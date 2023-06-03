import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";
import { toast } from "react-toastify";

import { addOrder } from "../../redux/cart/cart-operations";
import { isCaptcha } from "../../redux/cart/cart-selectors";

import {
	nameInput,
	emailInput,
	phoneInput,
	addressInput,
} from "../../data/formFields";

import Input from "./Input";

import styles from "./Form.module.scss";

const OrderForm = ({ order, orderPlace }) => {
	const isCaptchaSuccess = useSelector(isCaptcha);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "onBlur",
		defaultValues: { email: "", password: "" },
	});

	const onSubmit = ({ name, email, phone, address }) => {
		if (!isValid) return;
		let data = {
			orderId: uid(),
			order: order,
			orderPlace: orderPlace,
			name,
			email,
			phone,
			address,
		};
		console.log("res", data);

		dispatch(addOrder(data))
			.unwrap()
			.then((data) => {
				console.log("data", data);
				return toast.success(`Order,${data.order.orderId} posted!`);
			})
			.catch(() => toast.error("Invalid password or email"));
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input settings={nameInput} register={register} errors={errors} />
			<Input settings={emailInput} register={register} errors={errors} />
			<Input settings={phoneInput} register={register} errors={errors} />
			<Input
				settings={addressInput}
				register={register}
				errors={errors}
			/>
			{isCaptchaSuccess ? (
				<button type="submit" className={styles.btn}>
					Order
				</button>
			) : (
				<button disabled={true} className={styles.btnDis}>
					Enter Captcha Please
				</button>
			)}
		</form>
	);
};

export default OrderForm;
