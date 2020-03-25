const express=require('express');

const port=9000;
const app=express();
const cokkiesparser=require('cookie-parser');
const db=require('./config/mongoose');
const passport=require('passport');
const session=require('express-session');
const MongoStore=require('connect-mongo')(session);
///const session=require('express-session');
//const cokkiesparser=require('cookie-parser');
const passportlocal=require('./config/passport');
const cors = require('cors')

const whitelist = ['http://localhost:8080', 'http://saleimplexcart.online', 'https://saleimplexcart.online', 'http://localhost', '*']

const corsOptions = {
	origin: function(origin, callback){
		if(whitelist.indexOf(origin) != -1) callback(null, true)
		else callback(new Error('Not Allowed by CORS'))
	},
	credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded());
app.use(cokkiesparser());

app.use(express.static('./assets'));
app.use('/uploads',express.static(__dirname +'/uploads'));
app.use('/uploads/products/image',express.static(__dirname+'/uploads/products/image'));





app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
     name: 'Implex',
     // TODO change the secret before deployment in production mode
     secret: 'newsecret',     saveUninitialized: false,
     resave: false,
     cookie: {
         maxAge: (1000 * 60 * 100)
     },
     store: new MongoStore(
         {
             mongooseConnection: db,
             autoRemove: 'disabled'
         
         },
         function(err){
             console.log(err ||  'connect-mongodb setup ok');
         }
     )
 }));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthentication);

app.use('/',require('./routes'));

// firing server

app.listen(port,function(err)
{
     if(err)  {console.log(`Error in running server:${port}`);return;}

     console.log(`Surver is up and Running at POrt :${port}`); return;
});
