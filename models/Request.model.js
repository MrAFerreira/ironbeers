const { Schema, model } = require('mongoose');

const requestSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please input a name']
  },
  type: {
    type: String,
    required: [true, 'Please choose a type'],
    enum: ['beer', 'cider']
  },
  course: {
    type: String,
    required: [true, 'Please choose a course'],
    enum: ['webdev', 'uxui', 'data']
  }
});

module.exports = model('Request', requestSchema);
