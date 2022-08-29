const { Schema, model } = require('mongoose');

const requestSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please input a singer or more'],
  },
  type: {
    type: String,
    required: [true, 'Please choose a type'],
    enum: ['beer', 'cider'],
  },
});

module.exports = model('Request', requestSchema);
