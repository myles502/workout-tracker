const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "workout type is Required",
      },

      name: {
        type: String,
        trim: true,
        required: "Name is Required",
      },

      duration: {
        type: Number,
        trim: true,
        required: "duration is Required",
      },

      weight: {
        type: Number,
        trim: true,
      },

      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      distance: {
        type: Number,
        trim: true,
      },
    },
  ],

  day: {
    type: Date,
    default: Date.now,
  },
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
