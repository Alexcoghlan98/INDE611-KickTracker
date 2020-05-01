var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoosemmodel('user', UserSchema);
