import { React, useState } from 'react';
import "../assets/css/AccountDetails.css";


function AccountDetails() {
    const [name, setName] = useState('');
    const changeName = event => {
        setName(event.target.value);
    };  
    
    return (
        <>
            <div className="container mt-5 mb-5" style={{ marginTop: 75 }}>
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div>
                            <a href="/Metromart/" className='text-secondary text-decoration-none'>Home</a><span className='text-secondary me-2 ms-2'> / </span>
                            <a href="/Metromart/AccountDetails" className='text-black text-decoration-none'>My Account</a>
                        </div>
                        <div>
                            <p>Welcome! <span className='text-danger'>{name}</span></p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-4 mt-5 d-none d-md-block">
                        <div>
                            <h5 className='fw-bold mt-3'>Manage My Account</h5>
                            <h6 className='mt-4'><a href="#" className='ms-5 text-danger text-decoration-none ' >My Profile</a></h6>
                            <h6 className='mt-3'><a href="#" className='ms-5 text-secondary text-decoration-none ' >Address Book</a></h6>
                            <h6 className='mt-3'><a href="#" className='ms-5 text-secondary text-decoration-none ' >My payment Options</a></h6>
                            <h5 className='fw-bold mt-3'>My orders</h5>
                            <h6 className='mt-4'><a href="#" className='ms-5 text-secondary text-decoration-none ' >My Returns</a></h6>
                            <h6 className='mt-3'><a href="#" className='ms-5 text-secondary text-decoration-none ' >My Cancellations</a></h6>
                            <h5 className='fw-bold mt-3'>My Wishlist</h5>
                        </div>

                    </div>

                    <div className='col-8 manage-my-account mt-5 '>
                        <form method='post' class="shadow rounded p-5">
                            <h3 className=' text-danger '>Edit Your Profile</h3>
                            <div className="d-flex justify-content-between mt-5">
                                <div>
                                    <label htmlFor="Name" className='fw-bold'>Name</label>
                                    <input type="text" name="name" className='form-control text-black shadow-sm bg-light text-secondary border-0 mt-2  account-inputs ' placeholder='Name' onChange={changeName} />
                                </div>
                                <div>
                                    <label htmlFor="Email" className='fw-bold'>Email</label>
                                    <input type="email" placeholder='Email' name="email" className='form-control shadow-sm text-black bg-light text-secondary border-0 mt-2 account-inputs' />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <label htmlFor="PhoneNumber" className='fw-bold'>Phone Number</label>
                                    <input type="text" name="phonenumber" className='form-control text-black shadow-sm bg-light text-secondary border-0 mt-2 account-inputs' placeholder='Phone Number' />
                                </div>
                                <div>
                                    <label htmlFor="Address1" className='fw-bold'>Address One</label>
                                    <input type="text" placeholder='Address One' name="address1" className='form-control shadow-sm text-black bg-light text-secondary border-0 mt-2 account-inputs' />
                                </div>
                            </div>

                            <label htmlFor="Address2" className='fw-bold mt-4'>Address Two</label>
                            <input type="text" placeholder='Address Two' name="address2" className='form-control shadow-sm text-black bg-light text-secondary border-0 mt-2 address2-input' />

                            <label htmlFor="PasswordChanges" className='fw-bold mt-4'>Password Changes</label>
                            <input type="password" name="currentPassword" placeholder='Current Password' className='form-control text-black shadow-sm bg-light text-secondary border-0 mt-2' style={{ height: 50 }} />
                            <input type="password" name="newPassword" placeholder='New Password' className='form-control text-black shadow-sm bg-light text-secondary border-0 mt-2' style={{ height: 50 }} />
                            <input type="password" name="confirmNewPassword" placeholder='Confirm New Password' className='form-control text-black shadow-sm bg-light text-secondary border-0 mt-2' style={{ height: 50 }} />

                            <div className="d-flex justify-content-end mt-5">
                                <button className='btn shadow-sm btn-light text-black me-3'>Cancel</button>
                                <button className='btn btn-danger p-3' type='submit'>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountDetails;