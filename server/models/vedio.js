const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vedioSchema = new Schema({
    title: String,
    url: String,
    description: String,
});

module.exports = mongoose.model('vedio', vedioSchema, 'vedios');