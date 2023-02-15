const mongoose = require("mongoose");
const { Schema } = mongoose;

const WorkPlaceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  duration: {
    type: [String],
    required: true,
  },
});

const WorkPlace = mongoose.model("WorkPlace", WorkPlaceSchema, "workplaces");
module.exports = { WorkPlace };
