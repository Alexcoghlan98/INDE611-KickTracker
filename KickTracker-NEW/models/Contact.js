var mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  number: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Contact = mongoosemmodel('contact', ContactSchema);
