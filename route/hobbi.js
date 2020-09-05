const app = require("express");
const router = app.Router();
const {
	getHobbi,
	postHobbi,
	deleteHobbi,
} = require("../controller/hobbicontrol.js");
router.route("/").post(postHobbi);
router.route("/:id").get(getHobbi).delete(deleteHobbi);

module.exports = router;
