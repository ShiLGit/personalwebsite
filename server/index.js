const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const authRouter = require("./routers/authRouter");
const projRouter = require("./routers/projRouter");
const emailRouter = require("./routers/emailRouter");
const fpageRouter = require("./routers/fpageRouter");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());
app.use("/admin", authRouter);
app.use("/projects", projRouter);
app.use("/email", emailRouter);
app.use("/fpage", fpageRouter);
//db connection
try {
	mongoose.connect(process.env.DB_URI, {
		//avoid deprecation warnings
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	});
	mongoose.connection.once("open", () => {
		console.log("CONNECTION ESTABLISHED");
	});
} catch (e) {
	console.log("FFS", e);
}

app.listen(PORT, () => {
	console.log("Running on port " + PORT);
});
