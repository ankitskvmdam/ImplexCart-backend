const mongoose = require('mongoose');
const multer=require('multer');
const path=require('path');
const IMAGE_PATH=path.join('/uploads/products/image');

const ProductSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true,
       
    },
  
    title: {
        type: String,
        required: true
    },
    price:{
        type:String,
        required:true,
      },
    avatar:
    {
        type:String
    },
    description:
    {
        type:String,
        required:true
    }
},
    {
    timestamps: true
});

// linking our destination path using multer

let storage=multer.diskStorage(
    {
        destination:function(req,file,cb)
        {   console.log('in destination users',IMAGE_PATH);
            cb(null,path.join(__dirname,'..',IMAGE_PATH));
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
        }
    } 
);

// static to make them available for others
ProductSchema.statics.uploadedAvatar=multer({storage:storage}).single('image');
ProductSchema.statics.imagepath=IMAGE_PATH;


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;