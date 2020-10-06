const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlockTextSchema = new Schema({
	message: {
		type: String,
	},
});

const BlockText = mongoose.model("BlockText", blockTextSchema);

module.exports = BlockText;
