const router = require("express").Router();
const { setprofile } = require("../controller/profilecontrol.js");
router.route("/").post(setprofile);

module.exports = router;
