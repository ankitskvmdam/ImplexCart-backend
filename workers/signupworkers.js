const queue=require('../config/kue');
const signupMailer=require('../mailers/signup_mailer');

// function to process 

queue.process('signup',function(job,user,done)
{
    console.log("worker is doing job ",job.id);
    console.log('job dtaa',job.data);
    console.log('user',user.email);
   signupMailer.welcome(job.data);
    done();
});