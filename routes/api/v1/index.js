const express=require('express');

// using express route
const product=require('../../../controllers/api/v1/products');
const router=express.Router();


router.use('/user',require('./user'));
router.use('/product',require('./product'));








module.exports=router;