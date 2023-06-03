export const nameInput = {
	name: "name",
	type: "text",
	placeholder: "Name",
	required: true,
	requiredMessage: "Enter your name, please",
	pattern: /^([A-Za-z]+\s)*[A-Za-z]{2,32}$/i,
	patternMessage: "Invalid email address",
};

export const emailInput = {
	name: "email",
	type: "email",
	placeholder: "Email",
	required: true,
	requiredMessage: "Email is required",
	pattern:
		/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
	patternMessage: "Invalid email address",
};

export const phoneInput = {
	name: "phone",
	type: "tel",
	placeholder: "Phone",
	required: true,
	requiredMessage: "Enter your phone, please",
	pattern: /^[\d ()+-]+$/i,
	patternMessage: "Invalid email address",
};

export const addressInput = {
	name: "address",
	type: "text",
	placeholder: "City, Street house number",
	required: true,
	requiredMessage: "Enter your complete address, please",
};
