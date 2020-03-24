const express=require('express');

// using express route
const user=require('../../../controllers/api/v1/user');
const router=express.Router();


router.get('/getUsers',user.getUsers);

//router.use('/api',require('./api'));



module.exports=router;