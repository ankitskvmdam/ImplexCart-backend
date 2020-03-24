const User=require('../../../models/user');


module.exports.getUsers=async function(req,res)
{
    let users=await User.find({});
    return res.json(200, {
        message: "User created Susscufully",
        data:users
    });

    
}