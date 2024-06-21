const cartsController = require( "../controllers/carts.controller" );
// const { body, validationResult } = require( 'express-validator' );
const express = require( 'express' );
const cartRoute = express.Router();
const verifyToken = require( "../middleware/verfiyToken" )





cartRoute.get( "/", verifyToken,cartsController.getAllCarts);
cartRoute.get( "/getBillingDetails", verifyToken, cartsController.getBillingDetails );
cartRoute.get( "/getSingleCart/:userId",verifyToken, cartsController.getSingleCart );
cartRoute.post( "/addProductToCart",verifyToken, cartsController.addProductToCart );
cartRoute.delete( "/removeProductFromCart", verifyToken, cartsController.removeProductFromCart );
cartRoute.delete( "/removeAllProductsFromCart", verifyToken, cartsController.removeAllProductsFromCart );






module.exports = cartRoute;