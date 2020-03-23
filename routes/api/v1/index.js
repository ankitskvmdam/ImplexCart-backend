const express=require('express');

// using express route
const product=require('../../../controllers/api/v1/products');
const router=express.Router();

router.post('/product-create',product.createProduct);
router.get('/getProduct',product.showProduct);

//router.use('/api',require('./api'));



module.exports=router;