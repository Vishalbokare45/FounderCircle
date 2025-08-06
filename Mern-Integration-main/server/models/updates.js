// models/update.js
const mongoose = require('mongoose');

const updatesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name:{
    type:String,
  },
  userimg:{ 
    type: String,
    default: null 
  },
  desc: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Updates', updatesSchema);
