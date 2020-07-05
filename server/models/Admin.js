const mongoose = require('mongoose');
const config = require('../config');
const jwt = require('jsonwebtoken');

console.log('this??', this);
const adminSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    tokens: [{type: String, required: true}]
})


const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;