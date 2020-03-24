const express=require('express');

const passport=require('passport');

const router=express.Router();


router.post('/create-session',passport.authenticate('local'),usercontoler.createsession);


module.exports=router;