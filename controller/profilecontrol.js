const User = require("../Model/UserModel.js");
exports.setprofile = async (req, res, next) => {
	const { firstname, lastname, city, date, country, state } = req.body;
	try {
		const user = await User.findById(req.body.id);
		user.fullname = firstname + " " + lastname;
		user.country = country;
		user.state = state;
		user.city = city;
		user.bdate = date;
		user.profile = true;
		await user.save();
		return res.status(200).json({
			success: true,
			data: user,
		});
	} catch (e) {
		res.status(400).json({
			success: false,
			msg: "somthing worng",
		});
	}
};
