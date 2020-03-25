const express=require('express');
const path = require('path');
var fallback = require('express-history-api-fallback')

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
router.use(fallback(path.join(__dirname, '../dist/index.html')))



module.exports=router;