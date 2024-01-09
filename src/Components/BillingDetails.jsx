import React from 'react';

function BillingDetails ()
{
    return (
        <div className='container'>
            <div className="row">
                <h6><a href="#1">Account</a> / <a href="#2">My Account</a> / <a href="#3">Product</a> / <a href="#4">View Cart</a> / <a href="#5">ChechOut</a></h6>
                <div className="col-6">
                    <h2>Billing Details</h2>

                    <div className="row mt-3 label">
                        <label className='text-secondary'>First Name <span className='text-danger'>*</span></label>
                        <input type="text" name="firstName" className="w-75 form-control" />
                    </div>

                    <div className="row mt-3 label">
                        <label className='text-secondary'>Company Name</label>
                        <input type="text" name="companyName" className="w-75 form-control" />
                    </div>

                    <div className="row mt-3 label">
                        <label className='text-secondary'>Street Address <span className='text-danger'>*</span></label>
                        <input type="text" name="streetAddress" className="w-75 form-control" />
                    </div>

                    <div className="row mt-3 label">
                        <label className='text-secondary'>Apartment, floor, etc (optional)</label>
                        <input type="text" name="apartment" className="w-75 form-control" />
                    </div>

                    <div className="row mt-3 label">
                        <label className='text-secondary'>Town/City <span className='text-danger'>*</span></label>
                        <input type="text" name="town" className="w-75 form-control" />
                    </div>

                    <div className="row mt-3 label">
                        <label className='text-secondary'>Phone Number <span className='text-danger'>*</span></label>
                        <input type="number" name="phone" className="w-75 form-control" />
                    </div>

                    <div className="row mt-3 label">
                        <label className='text-secondary'>Email Address <span className='text-danger'>*</span></label>
                        <input type="email" name="email" className="w-75 form-control" />
                    </div>

                    <div className="row mt-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label>
                                Save this information for faster check-out next time
                            </label>
                        </div>
                    </div> <br />

                </div>
            </div>
        </div>
    );
}

export default BillingDetails;