const express = require("express");
const cors = require("cors");
//const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//Requiring our models for syncing
//const db = require('./models');

//// Sets up the Express app to handle data parsing
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(routes);

app.use(function (err, req, res, next) {
	if (err.name === "UnauthorizedError") {
		res.status(401).send(err);
	} else {
		next(err);
	}
});

//Local connect
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {
// 	useNewUrlParser: true,
// });

app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//TO DO

//Set Up Database

//Set Up Models

//Set up linking server to client side

//Add form to text block

//Get and Post routes for text block form to database and linking to twilio

//find npm sms commmand to sync up with submitting form
