const mongoose = require('mongoose');
const config = require('../config');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    token: {type: String}
})


const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;