const mongoose = require('mongoose');
const multer=require('multer');
const path=require('path');
const AVATAR_PATH=path.join('/uploads/users/avatar');



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type:String,
        required:true
    },
    number:
    {
        type:Number,
        required:true,
        unique:true
    },

   
    name: {
        type: String,
        required: true
    },

    parentName:
    {
        type:String,
        required:true
    },
    permanentAddress:
    {
        type:String,
        required:true
    },
    currentAddress:
    {
        type:String,
        required:true
    },
    alternateNumber:
    {
        type:Number,
        unique:true
            
        
    },
    panno:
    {
        type:String,
        required:true
    },
    aadharno:
    {
       type:Number,
       required:true
    },
    destination:
    {
        type:String
    },

      avatar:
    {
        type:String
    },
    aadharimage:
    {
        type:String,
        required:true
    },
    panimage:
    {
        type:String,
        required:true
    },
    organisationName:
    {
        type:String
    },
    organisationNature:
    {
        type:String
    },
    gstNo:
    {
        type:String
    },
    organisationScope:
    {
        type:String
    },
    countProduct:
    {
        type:Boolean,
        required:true
    },
    type:
    {
        type:String
    }
}, {
    timestamps: true
});

// linking our destination path using multer

let storage=multer.diskStorage(
    {
        destination:function(req,file,cb)
        {   console.log('in destination users',AVATAR_PATH);
            cb(null,path.join(__dirname,'..',AVATAR_PATH));
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+'-'+Date.now()+'.jpeg');
        }
    } 
);

// static to make them available for others
userSchema.statics.uploadedAvatar=multer({storage:storage}).array('image',3);
userSchema.statics.avatarpath=AVATAR_PATH;




const User = mongoose.model('ImplexUser', userSchema);

module.exports = User;