module.exports.createsession = function(req,res)
{  
    
    return res.json(200, {
        message: "User Looged inSusscufully",
        data:req.user
    });
}