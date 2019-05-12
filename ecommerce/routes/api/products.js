const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');

const productService = new ProductsService();

router.get('/', async function(req,res,next) {
    console.log(req.body);
    const { tags } = req.query;
    try {
        throw new Error('This is an error');
        const products = await productService.getProducts({tags});

        res.status(200).json({
            data: products,
            message: 'product listed'
        })
    }catch(err){
        next(err);
    }
    
})

router.get('/:productId',function(req,res, next) {
    const {productId} = req.params;
    const products = productService.getProduct({productId});
    res.status(200).json({
        data: products,
        message: 'product retrived'
    })
})

router.post('/',function(req,res) {
    const { body: product } = req;
    const products = productService.createProduct({product});
    res.status(201).json({
        data: products,
        message: 'product created'
    })
})

router.put('/:productId',function(req,res) {
    const products = productService.getProducts({tags});
    res.status(200).json({
        data: products,
        message: 'product updated'
    })
})

router.delete('/:productId',function(req,res) {
    const products = productService.getProducts({tags});
    res.status(200).json({
        data: products,
        message: 'product deleted'
    })
})

module.exports = router;