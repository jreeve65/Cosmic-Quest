const { Schema, Types } = require('mongoose');

// Schema to create Event model
const choiceSchema = new Schema(
  {
    choiceId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    choice: {
      type: String,
      required: true,
    },
    eventRef: {
            type: Schema.Types.ObjectId,
            ref: 'event',
    },
  },
  {
    toJSON: {
    //   getters: true,
    },
  }
);

module.exports = choiceSchema;
