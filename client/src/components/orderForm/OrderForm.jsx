import { useForm } from "react-hook-form";
import {
	nameInput,
	emailInput,
	phoneInput,
	adressInput,
} from "../../data/formFields";

import Input from "./Input";

import styles from "./Form.module.scss";

const OrderForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "onBlur",
		defaultValues: { email: "", password: "" },
	});

	const onSubmit = ({ name, email, phone, adress }) => {
		if (!isValid) return;
		let res = {
			name,
			email,
			phone,
			adress,
		};
		console.log("res", res);

		// dispatch(login(res))
		// 	.unwrap()
		// 	.then((res) => {
		// 		const { name } = res.user;
		// 		return toast.success(`Welcome, ${name} !`);
		// 	})
		// 	.catch(() => toast.error("Invalid password or email"));
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input settings={nameInput} register={register} errors={errors} />
			<Input settings={emailInput} register={register} errors={errors} />
			<Input settings={phoneInput} register={register} errors={errors} />
			<Input settings={adressInput} register={register} errors={errors} />
			<button type="submit" className={styles.btn}>
				Order
			</button>
		</form>
	);
};

export default OrderForm;
