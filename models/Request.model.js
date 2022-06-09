const { Schema, model } = require('mongoose');

const requestSchema = new Schema({
  singers: {
    type: String,
    required: [true, 'Please input a singer or more'],
  },
  song: {
    type: String,
    required: [true, 'Please input a song and artist'],
  },
});

module.exports = model('Request', requestSchema);
