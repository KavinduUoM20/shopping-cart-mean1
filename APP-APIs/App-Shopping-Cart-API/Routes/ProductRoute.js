const express = require('express');
const ProductController = require('../Controller/ProductController');

const router = express.Router();

router.get('/getAllProducts', ProductController.getAllProducts);
router.post('/saveProduct', ProductController.saveProduct);
router.get('/getProduct',ProductController.getProduct);
module.exports=router;
