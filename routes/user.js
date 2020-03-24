const express=require('express');

const passport=require('passport');

const router=express.Router();
const usercontoler=require('../controllers/usercontroller');


router.post('/create' ,usercontoler.create);
router.post('/create-session',passport.authenticate('local'),usercontoler.createsession);


module.exports=router;
