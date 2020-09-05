const mongoose = require("mongoose");
const HobbiSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name not empty"],
	},
	user: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});
module.exports = mongoose.model("Hobbi", HobbiSchema);
