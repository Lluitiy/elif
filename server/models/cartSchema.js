const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

const nameRegexp = /^([A-Za-z]+\s)*[A-Za-z]{2,32}$/i;
const emailRegexp =
	// eslint-disable-next-line no-useless-escape
	/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;
const phoneRegexp = /^[\d ()+-]+$/i;

const cartSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	order: {
		type: Schema.Types.Mixed,
		required: true,
	},
	orderId: {
		type: String,
		required: true,
	},
	orderPlace: {
		type: String,
		required: true,
	},
});

cartSchema.post("save", handleSaveErrors);

const cartValidationSchema = Joi.object({
	name: Joi.string().required().regex(nameRegexp),
	email: Joi.string().required().regex(emailRegexp),
	phone: Joi.string().required().regex(phoneRegexp),
	address: Joi.string().required(),
	order: Joi.object().pattern(
		Joi.string().required(),
		Joi.number().integer().positive().required()
	),
	orderId: Joi.string().required(),
	orderPlace: Joi.string().required(),
});

const cartSchemas = {
	cartValidationSchema,
};

const Cart = model("cart", cartSchema);

module.exports = {
	Cart,
	cartSchemas,
};
