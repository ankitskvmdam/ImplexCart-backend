const express=require('express');

const port=8000;
const app=express();
const cokkiesparser=require('cookie-parser');
const db=require('./config/mongoose');
//const MongoStore=require('connect-mongo')(session);

//const cokkiesparser=require('cookie-parser');


app.use(express.urlencoded());
app.use(cokkiesparser());

app.use(express.static('./assets'));
app.use('/uploads',express.static(__dirname +'/uploads'));





app.set('view engine','ejs');
app.set('views','./views');



app.use('/',require('./routes'));

// firing server

app.listen(port,function(err)
{
     if(err)  {console.log(`Error in running server:${port}`);return;}

     console.log(`Surver is up and Running at POrt :${port}`); return;
});
