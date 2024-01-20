import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from './utils/Card';

function SearchForProducts ()
{
    let [ products, setProducts ] = useState( [] );
    const searchKey = useParams().key
    let getProducts = () => {
        
    }

    if ( searchKey == "allProducts") {
        getProducts = async () =>
        {
            try
            {
                const res = await axios.get( `http://localhost:5011/products/` );
                setProducts( res.data.data );
            } catch ( error )
            {
                console.error( "Error fetching products:", error );
            }
        }
    } else if (parseInt(searchKey))
    {
        getProducts = async () =>
        {
            try
            {
                const res = await axios.get( `http://localhost:5011/products/getProductsByCategory/${searchKey}` );
                setProducts( res.data.data );
            } catch ( error )
            {
                console.error( "Error fetching products:", error );
            }
        }
    }
    else
    {
        getProducts = async () =>
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
    }


    useEffect( () =>
    {
        getProducts()
    },[])

    return (
        <div style={ { overflowX: "hidden" } }>
            <div className='row p-5'>
                {
                    products && products.map( ( item ) =>
                    {
                        return ( 
                            <div className="col-8 col-sm-6 col-md-4 col-lg-3 .col-xl-2">
                                <Card key={ item.id } item={ item } />
                            </div>
                        )
                    } )
                }
            </div>
            
        </div>
    );
}

export default SearchForProducts;