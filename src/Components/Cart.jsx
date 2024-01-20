import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RedirectToLogin from './RedirectToLogin';
import "../assets/css/Cart.css";
import { StarRating } from "./productDetailsComponents/StarRating";
import emptyCart from "../assets/images/Empty-cuate.png"

function Cart() {
    const [Products, setProducts] = useState([]);
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
        try {
            const res = await axios.get(`http://localhost:5011/Carts/getSingleCart/${user.id}`, {
                headers: {
                    'Authorization': 'Bearer ' + user_token
                }
            });
            setProducts(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserCart();
    }, []);

    const deleteProductFromCart = async (e, ProductID) => {
        e.preventDefault();

        const headers = {
            'Authorization': 'Bearer ' + user_token,
            'Content-Type': 'application/json',
        };

        const requestData = {
            user_id: user.id,
            product_id: ProductID,
        };

        try {
            await axios.delete("http://localhost:5011/carts/removeProductFromCart", {
                headers: headers,
                data: requestData,
            });
            getUserCart();
        } catch (error) {
            console.log(error);
        }
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        Products.forEach((product) => {
            totalPrice += product.product_data.price * product.quantity;
        });
        return totalPrice;
    };

    return (
        <div className='container p-5'>
            <div>
                {Products.length > 0 ? (
                    Products.map((product) => (
                        <div style={{ marginTop: 50 }} key={product.product_data.id}>
                            <div className='row'>
                                <div className='col-2'>
                                    <img className='w-100 h-100' src={JSON.parse(product.product_data.image_path)[0]} alt="" />
                                </div>
                                <div className='col-10'>
                                    <h3 className='fw-bold'>{product.product_data.name}</h3>
                                    <p className='text-black-50'>{product.product_data.description}</p>
                                    <h6>Quantity: {product.quantity}</h6>
                                    <h5><span className='text-danger'>{product.product_data.price * product.quantity}$</span></h5>
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
                    ))

                    ) : (
                        <div className='text-center'>
                        <img src={emptyCart} alt="z" className='h-50 w-50' />
                        <h1>There are no products in the cart.</h1>
                    </div>
                )}

                {Products.length != 0 ? (
                    <div className="mt-5">
                        <h4>Total Price: <span className='text-danger'>{calculateTotalPrice()}$</span></h4>
                    </div>
                ) : (
                    <div className='text-center'>
                    </div>
                )}


            </div>


        </div>
    );
}

export default Cart;
