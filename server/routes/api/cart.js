const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/cart");

const { ctrlWrapper } = require("../../helpers");

const { validateBody } = require("../../middlewares");

const { cartSchemas } = require("../../models/cartSchema");

router.post(
	"/",
	validateBody(cartSchemas.cartValidationSchema),
	ctrlWrapper(ctrl.addOrder)
);

module.exports = router;
