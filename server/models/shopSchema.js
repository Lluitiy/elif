const { Schema, model } = require("mongoose");

const { handleSaveErrors } = require("../helpers");

const shopSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	route: {
		type: String,
		required: true,
		unique: true,
	},
	products: [
		{
			_id: {
				type: Number,
				unique: true,
			},
			img: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
		},
	],
});

shopSchema.post("save", handleSaveErrors);

const Shop = model("shops", shopSchema);

module.exports = Shop;
