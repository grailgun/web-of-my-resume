// Import
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");

require("dotenv").config();

// app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mainRoute = require("./routes/index.js");
app.use(mainRoute);

// Listen
const PORT = process.env.PORT || 5000;
function listen() {
	app.listen(PORT, async () => {
		console.log(`Server is connected to port : ${PORT}`);
		await sequelize.authenticate();
		console.log("Database Sync");
	});
}
listen();
