const fpageRouter = require("express").Router();
const FPageData = require("../models/FPageData");
const auth = require("../middleware/auth");
fpageRouter.route("/setinfo").post(auth, async (req, res) => {
	if (!req.body) {
		return res.status(400).send({ error: "Missing body." });
	}
	let returnStatusCode = 200;
	let returnData = {};
	const saveData = new FPageData({ ...req.body });
	console.log(req.body);
	try {
		//step 1: existing entries? make sure there won't be more than 1
		const existingData = await FPageData.find();
		if (existingData.length >= 1) {
			for (let i = 0; i < existingData.length; i++) {
				console.log("deleting doc with bio =", existingData[i].bio);
				await FPageData.findByIdAndDelete(existingData[i]._id);
			}
		}

		const saved = await saveData.save();
		returnData = { success: "New frontpage data saved successfuly. Bio = " + saved.bio };
	} catch (e) {
		returnStatusCode = 400;
		returnData = { error: e };

		if (e.message) {
			returnData = { error: e.message };
		}
	} finally {
		res.status(returnStatusCode).send(returnData);
	}
});

fpageRouter.route("/getinfo").get(async (req, res) => {
	let returnData = null;
	const data = await FPageData.find();
	if (data.length > 0) {
		returnData = {
			webDevTS: data[0].webDevTS,
			schoolTS: data[0].schoolTS,
			otherTS: data[0].otherTS,
			bio: data[0].bio
		};
	}
	res.send(returnData);
});
module.exports = fpageRouter;
