const express=require('express');

// using express route

const router=express.Router();


router.use('/user',require('./user'));
router.use('/product',require('./product'));








module.exports=router;