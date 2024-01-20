import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RedirectToLogin from './RedirectToLogin';
import "../assets/css/Cart.css";
import { StarRating } from "./productDetailsComponents/StarRating";


function Cart() {
    const [Products, setProducts] = useState();
    const isLogin = localStorage.getItem('user') ? true : false;
    let user = '';
    let user_token = '';
    if (isLogin) {
        user = JSON.parse(localStorage.getItem('user'));
        user_token = localStorage.getItem('user_token');
    } else {
        <RedirectToLogin />;
    }

    const getUserCart = async () => {
        const res = await axios.get(`http://localhost:5011/Carts/getSingleCart/${user.id}`, {
            headers: {
                'Authorization': 'Bearer ' + user_token
            }
        });

        setProducts(res.data.data);
    };

    useEffect(() => {
        getUserCart();
    }, []);

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user_token}`,
    };

    const deleteProductFromCart = (e, ProductID) => {
        e.preventDefault();
        let res = axios.post("http://localhost:5011/carts/removeProductFromCart",
            {
                user_id: user.id,
                product_id: ProductID

            },
            { headers }
        )
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='container p-5'>
            <div>
                {
                    Products && Products.map((product) => {
                        return (
                            <div style={{ marginTop: 50 }}>
                                <div className='row'>
                                    <div className='col-2'>
                                        <img className='w-100 h-100' src={JSON.parse(product.product_data.image_path)[0]} alt="" />
                                    </div>
                                    <div className='col-10'>

                                        <h3 className='fw-bold'>{product.product_data.name}</h3>
                                        <p className='text-black-50'>{product.product_data.description}</p>
                                        <h5 ><span className='text-danger'>{product.product_data.price}$</span></h5>
                                        <StarRating rate={product.product_data.rate} />
                                        <div className='d-flex mt-3'>
                                            <button className='btn btn-success'>See product details</button>
                                            <button className='btn btn-danger ms-3'
                                                onClick={(e) => deleteProductFromCart(e, product.product_data.id)}>
                                                Remove from Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        );
                    })
                }
            </div>
        </div>

    );
}

export default Cart;