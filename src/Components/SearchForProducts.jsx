import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from './utils/Card';

function SearchForProducts ()
{
    let [ products, setProducts ] = useState( [] );
    const searchKey = useParams().key

    const getProducts = async () =>
    {
        try
        {
            const res = await axios.get( `http://localhost:5011/products/search/${ searchKey }` );
            setProducts( res.data.data );
        } catch ( error )
        {
            console.error( "Error fetching products:", error );
        }
    }

    useEffect( () =>
    {
        getProducts()
    },[])

    return (
        <>
            <div className='container'>
                <div className='row row-cols-2 row-cols-md-4'>
                    { products.map( ( item ) =>
                    {
                        return(
                        <>
                                <Card  item={item} key={item.id} />
                        </>)
                    })}
                </div>
            </div>
        </>
    );
}

export default SearchForProducts;