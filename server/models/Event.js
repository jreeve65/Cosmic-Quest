const { Schema, model } = require('mongoose');
const choiceSchema = require('./Choice');

// Schema to create Event model
const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      max_length: 20,
    },
    text: {
      type: String,
      required: true,
    },
    choices: [choiceSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Event = model('event', eventSchema);

module.exports = Event;
