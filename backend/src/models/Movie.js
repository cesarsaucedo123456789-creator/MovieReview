const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },

    poster: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", MovieSchema);
