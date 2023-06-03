const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/shop");

const { ctrlWrapper } = require("../../helpers");

const { validateBody } = require("../../middlewares");

router.get("/", ctrlWrapper(ctrl.getShops));

router.post("/", ctrlWrapper(ctrl.addShop));

module.exports = router;
