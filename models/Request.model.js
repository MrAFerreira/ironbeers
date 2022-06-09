const { Schema, model } = require('mongoose');

const requestSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please input a singer or more'],
  },
  amount: {
    type: Number,
    required: [true, 'Please input a number'],
  },
});

module.exports = model('Request', requestSchema);
