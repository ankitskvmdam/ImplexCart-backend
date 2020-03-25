const Product=require('../../../models/product');
const User=require('../../../models/user');
const fs=require('fs');
const path=require('path');

module.exports.createProduct=async function(req,res)
{

    try{

  console.log(req.user);
       
           
        
         let upload=await Product.uploadedAvatar(req,res,function(err)
         {   console.log('inside uplodad product file');
             if(err) 
             { return res.json(500, {
                message: "Error in creating Product",
                data:err
                });
            }
            let tag=req.body.tag;
            let price=req.body.price;
            let title=req.body.title;
            let description=req.body.description;
            let user=req.body.user_id;
            let filepath;

            if(req.file)
            {
                filepath=Product.imagepath+'/'+req.file.filename;
            }

            console.log('filepath is ',filepath);
            console.log('description',description);
            
        Product.create(
            {  user:user,
                tag:tag,
                price:price,
                title:title,
                description:description,
                avatar:filepath

            },function(err,product)
            {  console.log('crtate product callback');
                if(err) 
                {
                    return res.json(500, {
                        message: "Error in creating Product",
                        data:err
                    });}
                
                  //  user.save();
                    return res.json(200, {
                        message: "Product Posted Susscufully",
                        data:product
                    });
                


            }
        );

    });

      
    }
    catch(err)
    {
         return res.json(500, {
            message: "Error in creating Product",
            data:err
        });
    }
}


module.exports.showProduct=async function(req,res)
{
    try
    {
        let products= await Product.find({});
        return res.json(200, {
            message: "Request Sucess",
            data:products
        });
    }
    catch(err)
    {
        return res.json(500, {
            message: "Error in Fetching ProdutsProduct",
            data:err
        });
    }
}

module.exports.userProduct=async function(req,res)
{  try
    {
        let products=await Product.find({user:req.user._id});
        return res.json(200, {
            message: "Request Sucess",
            data:products
        });

    }catch(err)
    {
        return res.json(500, {
            message: "Error in Fetching ProdutsProduct",
            data:err
        });
    }
}