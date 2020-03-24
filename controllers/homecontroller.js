const Product=require('../models/product');
module.exports.home=async function(req,res)
{  
    let products=await Product.find({});
   return res.render('home',
    {
        title:'home',
        products:products
    });
}