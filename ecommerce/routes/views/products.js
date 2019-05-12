const express = require('express');
const router = express.Router();

const products = [
    {
        name: "Red Shoes",
        price: 75
    },
    {
        name: "black bike",
        price: 300
    }
]


router.get('/', function(req,res){
    res.render("products", {products});
});

module.exports = router;