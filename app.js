const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
const path=require('path');
const route=require('./routes/route');

//adding cors
app.use(cors());

//body parser
app.use(bodyparser.json());



//add routes
app.use('/api',route);

app.get('/', function (req, res) {
    res.send('hello world')
  });
  
  app.listen(3000, () => console.log('Example app listening on port 3000!'))