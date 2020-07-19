const mongoose = require('mongoose');

const projTextSchema = new mongoose.Schema({
    projName: {type: String, required: true},
    category: {type: String, required: true},
    titleDesc: {type: String, required: true},
    bodyMarkup: {type: String, required: true},
    projID: {type: String, required: true}
})

const ProjText = mongoose.model('ProjText', projTextSchema);
module.exports = ProjText;