const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    image: String,
    description: String
});

module.exports = mongoose.model("Blog", blogSchema);