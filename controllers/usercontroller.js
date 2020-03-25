const User=require('../models/user');
const crypto=require('crypto');
const queue=require('../config/kue');

module.exports.create=async function (req,res)
{
   
    

    let upload1=await User.uploadedAvatar(req,res,function(err)
    {   console.log('in upload');
        if(err) 
        { return res.json(500, {
           message: "Error in uploading Avatar",
           data:err
           });
       }

        let avatarpath;
        let aadharpath;
        let panpath;
        let password=crypto.randomBytes(20).toString('hex');
        console.log(req.files);
       if(req.files)
       {

       // console.log(req.file[0]);
        avatarpath=User.avatarpath+'/'+req.files[0].filename;
        aadharpath=User.avatarpath+'/'+req.files[1].filename;
        panpath=User.avatarpath+'/'+req.files[2].filename;
       }
      
       console.log('avatr paath',avatarpath);
       console.log('aadhar ',aadharpath);
       console.log('pan',panpath);

       console.log('creating user');
       User.create(
           {
               email:req.body.email,
               password:password,
               number:req.body.number,
               name:req.body.name,
               parentName:req.body.parentName,
               permanentAddress:req.body.permanentAddress,
               currentAddress:req.body.currentAddress,
               alternateNumber:req.body.alternateNumber,
               panno:req.body.panno,
               aadharno:req.body.aadharno,
               destination:req.body.destination,
               avatar:avatarpath,
               aadharimage:aadharpath,
               panimage:panpath,
               organisationName:req.body.organisationName,
               organisationNature:req.body.organisationNature,
               gstNo:req.body.gstNo,
               organisationScope:req.body.organisationScope,
               countProduct:true,
               type:'client'

           },function(err,user)
           {  
               if(err) 
               {
                   return res.json(500, {
                       message: "Error in creating User",
                       data:err
                   });}
                   let job=queue.create('signup',user).save((err)=>
                   {
                       if(err){console.log('error in queuing job',err);return;}
                       console.log('job enqued ',job.id);
                   });
                   return res.json(200, {
                       message: "User created Susscufully",
                       data:user._id
                   });
       

    });
});
}
module.exports.createsession = function(req,res)
{  
    
    return res.json(200, {
        message: "User Looged inSusscufully",
        data:req.user
    });
}