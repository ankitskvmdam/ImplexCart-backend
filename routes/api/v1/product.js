const express=require('express');
const passport=require('passport');

// using express route
const products=require('../../../controllers/api/v1/products');
const router=express.Router();


router.get('/getProduct',products.showProduct);
router.post('/product-create',products.createProduct);
router.get('/userProduct',products.userProduct);

//router.use('/api',require('./api'));



module.exports=router;