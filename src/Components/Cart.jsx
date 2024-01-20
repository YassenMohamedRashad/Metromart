import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RedirectToLogin from './RedirectToLogin';

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

        console.log( res );
    };


    useEffect( () =>
    {
        getUserCart();
    }, [] );

    return (
        <div className='container'>
            <table className='table'>

                    <tr>
                        <th>image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

                    <tr>
                        <td>image</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>

            </table>
        </div>

    );
}

export default Cart;