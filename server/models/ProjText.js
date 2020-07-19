const mongoose = require('mongoose');

const projTextSchema = new mongoose.Schema({
    projName: {type: String, required},
    category: {type: String, required},
    titleDesc: {type: String, required},
    bodyMarkup: {type: String, required},
    projID: {type: String, required}
})

const ProjText = mongoose.model('Admin', adminSchema);
module.exports = ProjText;