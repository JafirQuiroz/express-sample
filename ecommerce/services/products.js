const productMock = require('../utils/mocks/products');
//const MongoLib = require('./../lib/mongo');

class ProductsService {
    constructor() {
        this.collection = 'products';
        //this.mongoDB = new MongoLib();
    }

    getProducts({tags}) {
        return Promise.resolve(productMock);
    }

    getProduct({productId}){
        return Promise.resolve(productMock[0]);
    }

    createProduct({product}){
        return Promise.resolve(productMock[0]);
    }

    updateProduct({productId}){
        return Promise.resolve(productMock[0]);
    }

    deleteProduct({productId}){
        return Promise.resolve(productMock[0]);
    }
}

module.exports = ProductsService;