const mongoose = require("mongoose");
const { Schema } = mongoose;

const urlSchema = new Schema({
  originalUrl: { type: String, required: true },
  shortUrlId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Url", urlSchema);
