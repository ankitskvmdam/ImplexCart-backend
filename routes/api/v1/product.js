const express=require('express');

// using express route
const product=require('../../../models/product');
const router=express.Router();

router.post('/product-create',product.createProduct);
router.get('/getProduct',product.showProduct);
router.get('/getUserProduct',product.userProduct);

//router.use('/api',require('./api'));



module.exports=router;