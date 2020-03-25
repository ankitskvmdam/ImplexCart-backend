const nodemailer=require('../config/nodemailer');

exports.welcome=(user)=>
{
    let htmlstring=nodemailer.renderTemplate({user:user},'/users_msiler/welcome.ejs');
    nodemailer.transporter.sendMail(
        {   
            from:'ansh.colossal@gmail.com',
            to:user.email,
            subject:'Welcome To ImplexCart',
            html:htmlstring
        },(err,info)=>
        {
            if(err){console.log('error in delivering mail',err);return;}

            console.log(info);
        }
    );
}