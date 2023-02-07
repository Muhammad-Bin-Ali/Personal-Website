const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  technologies: {
    type: [String],
    trim: true,
    required: true,
  },
  url: {
    type: String,
    trim: true,
    required: true,
  },
  images: {
    type: [String],
    trim: true,
    required: true,
  },
});

const Project = mongoose.model("Project", ProjectSchema, "projects");
module.exports = { Project };
