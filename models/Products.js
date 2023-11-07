const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    quantity: Number
});

module.exports = mongoose.model('Products',ProductSchema);