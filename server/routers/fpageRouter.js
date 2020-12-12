const fpageRouter = require("express").Router();
const { findOne } = require("../models/FPageData");
const FPageData = require("../models/FPageData");
fpageRouter.route("/getinfo").get(async (req, res) => {
	const toSend = await FPageData.findOne();
	res.send(toSend);
});
fpageRouter.route("/setinfo").post(async (req, res) => {
	if (!req.body) {
		return res.status(400).send({ error: "Missing body." });
	}
	console.log(req.body);
	const saveData = new FPageData({ ...req.body });
	saveData.save((err) => {
		if (err) {
			console.log(err);
			return res.status(400).send({ error: "Error saving request body. Check if request is valid?." });
		} else {
			res.status(200).send({ success: "SAVED DAWG" });
		}
	});
});
module.exports = fpageRouter;
