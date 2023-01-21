const Product = require('../Model/ProductSchema');

const getAllProducts=(req , resp)=> {
    Product.find().then(result=>{
        resp.status(200).json({dataSet:result});
    }).catch(error=>{
        resp.status(500).json(error);
    });
}

const saveProduct=(req , resp)=> {
    const product = new Product({
        productId: req.body.productId,
        title: req.body.title,
        type: req.body.type,
        description: req.body.description,
        filename: req.body.filename,
        qty: req.body.qty,
        price:req.body.price
    });
    product.save().then(result=>{
        resp.status(200).json({state:true,"messege":"Product Saved !"})
    }).catch(error=>{
        resp.status(500).json(error)
    });
}

const getProduct=(req , resp)=> {
    Product.findOne({productId:req.headers.id}).then(result=>{
        if (result!==null){
            resp.status(200).json({state: true, data: result});
        }else{
            resp.status(200).json({state: false, data: result});
        }
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

module.exports = {
    getAllProducts,
    saveProduct,
    getProduct
}
