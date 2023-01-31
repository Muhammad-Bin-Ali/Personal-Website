const mongoose = require("mongoose");
const { Schema } = mongoose;

// const ProjectSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   description: {
//     type: [String],
//     trim: true,
//     required: true,
//   },
//   technologies: {
//     type: [String],
//     trim: true,
//     required: true,
//   },
//   link: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   images: {
//     type: [String],
//     trim: true,
//     required: true,
//   },
// });

const AccountSchema = new Schema({
  account_id: Number,
  limit: Number,
  products: [String],
});

// const Project = mongoose.model("Project", ProjectSchema);
const Account = mongoose.model("Account", AccountSchema, "accounts");
module.exports = { Account };
