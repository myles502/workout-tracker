const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
   Type: {
    type: String,
    trim: true,
    required: 'workout type is Required',
  },

  Name: {
    type: String,
    trim: true,
    required: 'Name is Required',
  },

  duration: {
    type: String,
    trim: true,
    required: 'duration is Required',
  },

  weight: {
    type: Number,
    trim: true,
  },

  reps: {
    type: number,
    trim: true,
  },
  sets: {
    type: number,
    trim: true,
  },
  distance: {
    type: number,
    trim: true,
  },
  workoutDate: {
    type: Date,
    default: Date.now,
  },

});



const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;

