import styles from "./Form.module.scss";

const Input = ({ settings, register, errors }) => {
	const {
		name,
		type,
		placeholder,
		required,
		requiredMessage,
		pattern = null,
		patternMessage = null,
	} = settings;

	return (
		<label className={styles.label} htmlFor={name}>
			{placeholder}
			<input
				id={name}
				className={styles.input}
				type={type}
				placeholder={placeholder}
				{...register(name, {
					required: {
						value: required,
						message: requiredMessage,
					},
					pattern: pattern && {
						value: pattern,
						message: patternMessage,
					},
				})}
			/>
			{errors[name] && (
				<ValidationError>{errors[name]?.message}</ValidationError>
			)}
		</label>
	);
};

const ValidationError = ({ children }) => {
	return <p className={styles.error}>{children}</p>;
};

export default Input;
