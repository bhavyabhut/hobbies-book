const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const hobbi = require("./route/hobbi");
const login = require("./route/login");
const profile = require("./route/profile");
const path = require("path");

const { User } = require("./Model/UserModel.js");
const cors = require("cors");
mongoose.connect(process.env.DB_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => {
	console.log("connection error:");
});
db.on("open", () => {
	console.log("database connected...");
});
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", hobbi);
app.use("/login", login);
app.use("/profile", profile);
const port = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	);
}
app.listen(port, () => {
	console.log(`server is starting at ${port}...`);
});
