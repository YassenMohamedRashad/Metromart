import React, { useEffect, useState } from 'react';
import Products from "../Products.json";
import Card from './Card';
import axios from 'axios';
import { Fail } from '../SweetAlert';


function ProductsContainer ()
{
    const [ Products, setProducts ] = useState( [] );
    const getData = async () =>
    {
        try
        {
            const res = await axios.get( "http://localhost:5011/products/" );
            setProducts( res.data.data );
        } catch ( error )
        {
            Fail( "Error: Unable to fetch data. Please try again later." );

        }

    };

    useEffect( () =>
    {
        getData();
    }, [] )
    return (
        <div className="container">
            <div className="row justify-content-center  ">
                {
                    Products && Products.map((item) => {
                        return (
                            <Card item={item} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ProductsContainer;