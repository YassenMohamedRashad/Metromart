import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RedirectToLogin from './RedirectToLogin';
import "../assets/css/Cart.css";

function Cart ()
{
    const [ Products, setProducts ] = useState();
    const isLogin = localStorage.getItem( 'user' ) ? true : false;
    let user = '';
    let user_token = '';
    if ( isLogin )
    {
        user = JSON.parse( localStorage.getItem( 'user' ) );
        user_token = localStorage.getItem( 'user_token' );
    } else
    {
        <RedirectToLogin />;
    }

    const getUserCart = async () =>
    {
        const res = await axios.get( `http://localhost:5011/Carts/getSingleCart/${ user.id }`, {
            headers: {
                'Authorization': 'Bearer ' + user_token
            }
        } );

        setProducts( res.data.data );
    };


    useEffect( () =>
    {
        getUserCart();
    }, [] );

    return (
        <div className='container p-5'>
            <div>
                {
                    Products && Products.map( ( product ) =>
                    {
                        return (
                            <div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img className='w-100' src={ JSON.parse( product.product_data.image_path )[ 0 ] } alt="" />
                                    </div>
                                    <div className='col-6'>
                                        <h3 className='fw-bold'>{ product.product_data.name }</h3>
                                        <p className='text-black-50'>{ product.product_data.description }</p>
                                        <p>{ product.product_data.rate }</p>
                                        <p><span className='text-danger'>{ product.product_data.stock }</span> leave in stock</p>
                                        <h4 >Price : <span className='text-danger'>{ product.product_data.price }$</span></h4>
                                        <div className='d-flex'>
                                            <button className='btn btn-success'>See product details</button>
                                            <button className='btn btn-danger ms-3'>Remove from Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } )
                }
            </div>
        </div>

    );
}

export default Cart;