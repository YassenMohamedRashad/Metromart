import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RedirectToLogin from './RedirectToLogin';
import "../assets/css/Cart.css";
import { StarRating } from "./productDetailsComponents/StarRating";
import emptyCart from "../assets/images/Empty-cuate.png"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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


    const checkoutHandler = () => {
        Swal.fire({
            title: 'Confirm Checkout',
            text: `Are you sure you want to checkout? Your total price is ${calculateTotalPrice()}$.`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, checkout!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                emptyCartAndRedirect();
            }
        });
    };

    const emptyCartAndRedirect = async () => {

        const headers = {
            'Authorization': 'Bearer ' + user_token,
            'Content-Type': 'application/json',
        };

        try {
            await axios.delete("http://localhost:5011/carts/removeAllProductFromCar", {
                headers: headers
            });
            getUserCart();
        } catch (error) {
            console.log(error);
        }
        Swal.fire({
            title: 'Checkout Successful!',
            text: 'Thank you for your purchase.',
            icon: 'success',
        }).then(() => {
            window.location.href = '/Metromart/'
        });
    };

    return (
        <div className='container p-5'>
            <div>
                {Products.length > 0 ? (
                    Products.map((product) => (
                        <div style={{ marginTop: 50 }} key={product.product_data.id}>
                            <div className='row'>
                                <div className='col-4'>
                                    <img className='w-100 h-100' src={JSON.parse(product.product_data.image_path)[0]} alt="" />
                                </div>
                                <div className='col-8'>
                                    <h3 className='fw-bold'>{product.product_data.name}</h3>
                                    <p className='text-black-50'>{product.product_data.description}</p>
                                    <h5><span className='text-danger'>{product.product_data.price}$</span></h5>
                                    <div className="d-flex">
                                        <h5>Quantity: {product.quantity}</h5>
                                        <h5 className='ms-4'><span className='text-black'>Total Price: {product.product_data.price * product.quantity}$</span></h5>
                                    </div>
                                    <StarRating rate={product.product_data.rate} />
                                    <div className='d-flex mt-3'>
                                        <Link className='btn btn-success' to={`http://localhost:3000/Metromart/productDetails/${product.product_data.id}`}>See product details</Link>
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
                        <div className="d-flex justify-content-between">
                            <h4>Total Price: <span className='text-danger'>{calculateTotalPrice()}$</span></h4>
                            <button className='btn btn-primary' onClick={checkoutHandler}>
                                Checkout
                            </button>
                        </div>
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
