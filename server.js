let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let router = express.Router();
let path = require('path');

mongoose.connect('mongodb://localhost:27017/PM',{useMongoClient: true});

app.use(bodyParser.urlencoded({
  extended: true
}));
require('./app/routes')(router);
app.use('/api',router)
//console.log(path.join(__dirname,'/public/index.html'));
app.get('*',(req,res)=>{
        
        res.sendFile(path.join(__dirname,'/public/index.html'));
})
process.on('UnhandledException',(err)=>{
    console.log(err)
})
app.listen(8080);
console.log('sunn raha hoon...bol ab...')
