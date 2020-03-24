const express=require('express');

// using express route
const router=express.Router();


const homeController=require('../controllers/homecontroller');


router.get('/',homeController.home);
router.use('/user',require('./user'));
router.use('/api',require('./api'));



module.exports=router;