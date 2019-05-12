const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const productsRouter = require('./routes/views/products');
const productsAPIRouter = require('./routes/api/products');
const {logErrors,
    clientErrorHandler,
    errorHandler} = require('./utils/middlewares/errorHandler');

const app = express();
app.use(bodyParse.json());
/*Manejo archivo estaticos*/
app.use("/static",express.static(path.join(__dirname, "public")));
/* View engine setup */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/* Routes */
app.use('/products',productsRouter);
app.use('/api/products',productsAPIRouter);


//Redirect users  to products
app.get('/',function(req,res) {
    res.redirect('/products');
});

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

const server = app.listen(8000,function() {
    console.log(`Listening ${server.address().port}`)
});