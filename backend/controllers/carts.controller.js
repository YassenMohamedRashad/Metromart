const { validationResult } = require( 'express-validator' );
const httpStatusText = require( "../utils/httpStatustext" );
const Carts = require( '../models/orders' );
const User = require( "../models/users" );
const Products = require( "../models/products" );
const bcrypt = require( 'bcryptjs' );
const { sumQuantities } = require("../utils/sumQuantities")





const getAllCarts = async ( req, res ) =>
{
    try
    {
        const carts = await Carts.findAll();
        res.status( 200 ).send( { status: httpStatusText.SUCCESS, data: carts } );
    } catch ( error )
    {
        res.status( 400 ).send( { status: httpStatusText.FAIL, data: null, msg: error.message } );
    }
};
const getBillingDetails = async ( req, res ) =>
{
	const data = req.body 
    try
    {
        const carts = await Carts.findAll();
        res.status( 200 ).send( { status: httpStatusText.SUCCESS, data: carts } );
    } catch ( error )
    {
        res.status( 400 ).send( { status: httpStatusText.FAIL, data: null, msg: error.message } );
    }
};


const getSingleCart = async ( req, res ) =>
{
	const userId = req.params.userId
	try
	{
		const userCart = await Carts.findAll( {
			where: { user_id: userId }
		} )
		let finalCart = []
		for (let product of userCart) {
			const productData = await Products.findOne( { where: { id: product.product_id } } )
			finalCart.push({"product_data":productData , "quantity" : product.quantity})
		}
		
		res.status( 200 ).send( { status: httpStatusText.SUCCESS, data: finalCart} );
	} catch ( error )
	{
		res.status( 400 ).send( { status: httpStatusText.FAIL, data: null, msg: error.message } );
	}
};

const addProductToCart = async ( req, res ) =>
{
	const data = req.body // user_id  , product_id , quantity
	try {
		const user = await User.findAll( {
			where: {
				id: data.user_id
			}
		} );
		if ( user.length == 0 ) { throw new Error( 'user not found' ); }

		const product = await Products.findAll( {
			where: {
				id: data.product_id
			}
		} );
		if ( product.length == 0 ) { throw new Error( 'product not found' ); }
		else if ( product[0].quantity == 0 ) { throw new Error( 'product unavailable now' ); }
		
		if ( data.quantity <= 0 ) { throw new Error( 'invalid quantity' ); }

		const productIsFoundInCart = await Carts.findAll({where:{product_id:data.product_id ,user_id:data.user_id }})

		if ( productIsFoundInCart.length != 0 )
		{
			let updatedQuantity = productIsFoundInCart[0].quantity + data.quantity
			await Carts.update( {
				"quantity": updatedQuantity
			}, {
				where: {
					product_id: data.product_id,
					user_id: data.user_id
				}
			} );

			res.status( 200 ).send( { status: httpStatusText.SUCCESS, data: null, msg: "quantity of products updated" } )

		} else
		{
			const newCart = Carts.build( {
				'product_id': data.product_id,
				'user_id': data.user_id,
				'quantity':data.quantity
			} )
			await newCart.save()
			res.status( 200 ).send( { status: httpStatusText.SUCCESS, data: null , msg : "added to cart successfully"} )
		}




	} catch (error) {
		res.status( 400 ).send( { status: httpStatusText.FAIL, data: null, msg: error.message } );
	}
}

const removeProductFromCart =  async ( req, res ) =>
{
	const data = req.body
	try {
		await Carts.destroy( {
			where: {
				user_id: data.user_id,
				product_id : data.product_id
			}
		} );
		res.status( 200 ).send( { status: httpStatusText.SUCCESS, data: null, msg: "product removed successfully" } );
	} catch (error) {
		res.status( 400 ).send( { status: httpStatusText.FAIL, data: null, msg: error.message } );
	}
}

const removeAllProductsFromCart =  async ( req, res ) =>
{
	const data = req.body
	try {
		await Carts.destroy( {
			where: {
				user_id: data.user_id,
			}
		} );
		res.status( 200 ).send( { status: httpStatusText.SUCCESS, data: null, msg: "user cart removed successfully" } );
	} catch (error) {
		res.status( 400 ).send( { status: httpStatusText.FAIL, data: null, msg: error.message } );
	}
}

module.exports = {
	getAllCarts,
	getSingleCart,
	addProductToCart,
	removeProductFromCart,
	getBillingDetails,
	removeAllProductsFromCart
};
