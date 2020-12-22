const fpageRouter = require("express").Router();
const { findOne, findByIdAndDelete } = require("../models/FPageData");
const FPageData = require("../models/FPageData");

fpageRouter.route("/setinfo").post(async (req, res) => {
	if (!req.body) {
		return res.status(400).send({ error: "Missing body." });
	}
	let returnStatusCode = 200;
	let returnData = { success: "New frontpage data saved successfully." };
	const saveData = new FPageData({ ...req.body });

	try {
		//step 1: existing entries? make sure there won't be more than 1
		const existingData = await FPageData.find();
		if (existingData.length >= 1) {
			for (let i = 0; i < existingData.length; i++) {
				console.log("deleting doc with bio =", existingData[i].bio);
				await FPageData.findByIdAndDelete(existingData[i]._id);
			}
		}

		//save data
		const savedData = await saveData.save();
	} catch (e) {
		//console.log("ERREUR", JSON.stringify(e));
		returnStatusCode = 400;
		returnData = { error: e };
		console.log("WTF II");

		if (e.message) {
			returnData = { error: e.message };
		}
	} finally {
		res.status(returnStatusCode).send(returnData);
	}
});

fpageRouter.route("/getinfo").get(async (req, res) => {
	console.log("wtf");
	const data = await FPageData.find();
	console.log(data.length);
	res.send({ wot: "WAZZZZZZA" });
});
module.exports = fpageRouter;
