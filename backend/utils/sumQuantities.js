function sumQuantities ( products )
{
    const quantitySumMap = {};

    for ( const item of products )
    {
        const productId = item.product_id;
        const quantity = item.quantity;

        if ( quantitySumMap[ productId ] )
        {
            quantitySumMap[ productId ] += quantity;
        } else
        {
            quantitySumMap[ productId ] = quantity;
        }
    }

    const resultArray = [];

    for ( const productId in quantitySumMap )
    {
        resultArray.push( { "product_id": parseInt( productId ), "quantity": quantitySumMap[ productId ] } );
    }

    return resultArray;
}


module.exports = { sumQuantities };