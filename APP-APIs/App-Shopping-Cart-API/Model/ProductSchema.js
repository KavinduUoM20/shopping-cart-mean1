const mongoose =require('mongoose');

const productSchema =new mongoose.Schema({
    productId : { type: Number},
    title: { type: String},
    type: { type: String},
    description: { type: String},
    filename: {type: String},
    qty: {type:Number},
    price: {type: Number}
});

module.exports=mongoose.model('Product',productSchema);
