const productsController = require( "../controllers/products.controller" );
const { body, validationResult } = require( 'express-validator' );
const express = require( 'express' );
const productrouter = express.Router();


productrouter.get( "/", productsController.getAllProducts );
productrouter.get( "/:id", productsController.getSingleProduct );
productrouter.get( "/search/:search", productsController.searchForProducts );
productrouter.get( "/getProductsByCategory/:category_id", productsController.getProductsByCategory );





module.exports = productrouter

