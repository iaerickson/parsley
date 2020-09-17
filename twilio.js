var twilio = require("twilio");

//Exporting sensitive tokens to .env
require("dotenv").config();

var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
var client = new twilio(accountSid, authToken);

client.messages
	.create({
		body: "Hello from Node",
		to: process.env.TWILIO_TO, // Text this number
		from: process.env.TWILIO_FROM, // From a valid Twilio number
	})
	.then((message) => console.log(message.sid));
