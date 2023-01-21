const mongoose =require('mongoose');

const cartSchema =new mongoose.Schema({
    cartId : { type: Number},
    productId : { type: Number},
    title: { type: String},
    quantity: {type: Number},
    price: {type: Number}
});

module.exports=mongoose.model('Cart',cartSchema);
