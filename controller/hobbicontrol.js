const User = require("../Model/UserModel.js");
const Hobbi = require("../Model/HobbiModel.js");
exports.getHobbi = async (req, res, next) => {
	try {
		const hobbis = await Hobbi.find({ user: req.params.id });
		res.status(200).json({
			success: true,
			data: hobbis,
		});
	} catch (e) {
		res.status(500).json({
			success: false,
			msg: "SERVER ERROR",
		});
	}
};
exports.postHobbi = async (req, res, next) => {
	console.log(req.body);
	try {
		const user = await User.findById(req.body.id);
		const hobbi = new Hobbi({
			name: req.body.name,
			user: user._id,
		});
		const data = await hobbi.save();
		user.hobbies.push(hobbi._id);
		const newuser = await user.save();
		res.status(200).json({
			success: true,
			data: data,
		});
	} catch (e) {
		if (e.name === "ValidationError") {
			res.status(404).json({
				success: false,
				msg: "Name Not Empty",
			});
		} else {
			res.status(500).json({
				success: false,
				msg: "SERVER ERROR",
			});
		}
	}
};
exports.deleteHobbi = async (req, res, next) => {
	const hobbi = await Hobbi.findById(req.params.id);
	try {
		const data = await hobbi.remove();
		return res.status(200).json({
			success: true,
			data,
		});
	} catch (e) {
		res.status(500).json({
			success: true,
			msg: "SERVER ERROR",
		});
	}
};
