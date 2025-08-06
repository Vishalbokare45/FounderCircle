// models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
//user details
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  name: {
    type: String,
  },
  act: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  uimg:{
     type: String,
  },
  phone:{
    type: String,
  },
  bio: {
    type: String,
  },
  

  //business deails
  cat:{
    type:String,
  },
  add: {
    type: String,
    
  },

  web: {
    type: String,
    
  },
  eyear: { 
    type: Number, 
  },
  
  
  pone: {
    type: String,
    
  },
  pnone: {
    type: String,
    
  },
  ptwo: {
    type: String,
    
  },
  pntwo: {
    type: String,
    
  },
  pthree: {
    type: String,
    
  },
  pnthree: {
    type: String,
    
  },
  btitle: {
    type: String,
    
  },
  bdesc: {
    type: String,
    
  },

  tm: {
    type: String,
    
  },
  cp: {
    type: String,
    
  },
  sms: {
    type: String,
    
  },
  bm: {
    type: String,
    
  },
  mjc: {
    type: String,
    
  },
  cad: {
    type: String,
    
  },
  
  //Finance
  tp: { 
    type: String,
 },
 fdesc: {
    type: String,
    
  },
  rev: { 
    type: Number, 
 },
 expen: { 
    type: Number, 
 },
 net: { 
    type: Number, 
 },
});

module.exports = mongoose.model('Profile', profileSchema);
