const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    require: true
  },
  surname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  resetToken: String,
  resetTokenExpiration: Date
});

module.exports = mongoose.model('User', userSchema);