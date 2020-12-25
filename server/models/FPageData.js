const mongoose = require("mongoose");

const projTextSchema = new mongoose.Schema({
	webDevTS: { type: String, required: true },
	schoolTS: { type: String, required: true },
	otherTS: { type: String, required: true },
	bio: { type: String, required: true }
});

const FPageData = mongoose.model("FPageData", projTextSchema);
module.exports = FPageData;
