// models/follow.js
const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  fbid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile', 
    required: true,
  },
  fbname: {
    type: String,
    required: true,
  },
  ftid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile', 
    required: true,
  },
  ftname: {
    type: String,
    required: true,
  },
  ftimg:{
    type: String,
  },
  date: {
    type: Date,
    default: Date.now, 
},
 });

module.exports = mongoose.model('Follow', followSchema);
