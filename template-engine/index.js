const express = require('express');
const app = express();
const expressJSX = require('./express-jsx');

app.engine("jsx",expressJSX);
app.set("views", "./views");
app.set("view engine", "jsx");

app.get('/',function(req, res) {
    res.render('index',{ hello: 'Hola'})
});

const server = app.listen(8000,function(){
    console.log(`Listening port ${server.address().port}`);
});