const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
const path=require('path');
const passport=require('passport');
const route=require('./routes/route');
const cookieParser =require('cookie-parser');
const session=require('express-session');

app.use(cookieParser());
app.use(session({secret:'secretKey',saveUninitialized:true,resave:true,cookie:{maxAge:60000}}));

//adding cors
app.use(cors());

//static folder
app.use(express.static(path.join(__dirname,'optii')));

//body parser
app.use(bodyparser.json());

//passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport') (passport);
//add routes
app.use('/api',route);

app.get('/', function (req, res) {
    res.send('hello world')
  });
  
  app.listen(3000, () => console.log('Example app listening on port 3000!'))