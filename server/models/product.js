const mongoose = require('mongoose');





const productSchema = mongoose.Schema({
    product: { type: String, required: true},
    price: { type: Number, required: true},
    details: {type: String, required: true},
    quantity: {type: Number, required: true},
    image: {type: String, required: false},
});


module.exports = mongoose.model('Products', productSchema);