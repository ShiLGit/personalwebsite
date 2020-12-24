//recall .. middleware runs before the route handler >> must call next() for route handler to begin
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const auth = async (req, res, next) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		// console.log("FROM AUTH MIDDLEWARE: " + token);

		//find an admin that has the decoded id and a matching token
		const admin = await Admin.findOne({ _id: decoded._id });
		console.log(admin);
		if (!admin) {
			throw new Error("No admin match");
		}

		//this adds .user, .admin to request handler 'req' arg
		req.admin = admin;

		next();
	} catch (e) {
		console.log(e);
		//note how you don't call next() --> we're not running the route handler, just sending errmsg
		return res.status(401).send({ error: "You are not authorized to access this route!!!" });
	}
};

module.exports = auth;
