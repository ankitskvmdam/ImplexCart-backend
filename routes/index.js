const express=require('express');
const path = require('path');

// using express route
const router=express.Router();


// const homeController=require('../controllers/homecontroller');


// router.get('/',homeController.home);

// https://codeforgeek.com/render-html-file-expressjs/
router.get('/', function(req, res){
    const distPath = (path.join(__dirname, '../dist/index.html'))
    res.sendFile(distPath)
})
router.use('/user',require('./user'));
router.use('/api',require('./api'));



module.exports=router;