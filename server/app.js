const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const shopsRouter = require("./routes/api/shop");
const cartRouter = require("./routes/api/cart");

app.use("/shops", shopsRouter);
app.use("/cart", cartRouter);

app.use((req, res) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
	const { status = 500, message = "Server error" } = err;
	res.status(status).json({ message });
});

module.exports = app;
