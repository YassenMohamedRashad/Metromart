const httpStatusText = require( "../utils/httpStatustext" );
const Products = require( '../models/products' );
const { Sequelize } = require("sequelize");

const getAllProducts = async(req,res) =>
{
        try
        {
            const products = await Products.findAll();
            res.status( 200 ).send( { status: httpStatusText.SUCCESS, data: products } );
        } catch ( error )
        {
            res.status( 400 ).send( { status: httpStatusText.FAIL, data: null, msg: error } );
        }
}

const getSingleProduct = async ( req, res ) =>
{
    try
    {
        const productId = req.params.id
        const product = await Products.findOne( { where: { id: productId } } );
        if(product == null){throw new Error("please enter valid id")}
        res.status( 200 ).send( { status: httpStatusText.SUCCESS, data: product } );
    } catch ( Error )
    {
        res.status( 400 ).send( { status: httpStatusText.FAIL, data: null, msg: Error.message } );
    }
}

/* search (case-insensitive) */
const searchForProducts = async (req, res) => {
	try {
		const productName = req.params.search.toLowerCase(); // make it case insensitive
		const product = await Products.findAll({
			where: {
				name: Sequelize.where(
					Sequelize.fn("LOWER", Sequelize.col("name")),
					"LIKE",
					"%"+productName + "%"
				),
			},
		});
		if (product.length == 0) {
			throw new Error("No products found with this name");
		}
		res.status(200).send({ status: httpStatusText.SUCCESS, data: product });
	} catch (error) {
		res.status(400).send({
			status: httpStatusText.FAIL,
			data: null,
			msg: error.message,
		});
	}
};


const getProductsByCategory = async ( req, res ) =>
{
    const category_id = req.params.category_id
    try {
        const products = await Products.findAll( { where: { category_id: category_id } } )
        if ( products.length == 0 ) { throw new Error( 'no products with this category' ); }
        res.status( 200 ).send( { status: httpStatusText.SUCCESS, data: products } );
    } catch (error) {
        res.status( 400 ).send( { status: httpStatusText.FAIL, data: null, msg: error.message } );
    }
}


module.exports = {
    getAllProducts,
    getSingleProduct,
    searchForProducts,
    getProductsByCategory
};
