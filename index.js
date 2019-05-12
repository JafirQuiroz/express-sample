const express = require('express');
const app = express();

app.get('/',function(req,res,next){
    res.send('Hello');
});

const server = app.listen(8000,function(){
    console.log(`Listening ${server.address().port}`)
});