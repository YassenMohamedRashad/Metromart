import { React, useState } from 'react';
import "../assets/css/AccountDetails.css";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


function AccountDetails ()
{
    const [formData, setFormData] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		address1: "",
		address2: "",
		currentPassword: "",
		newPassword: "",
		confirmNewPassword: "",
	});
    const navigate = useNavigate();
    const { dispatch } = useAuth();

    const handleLogout = () =>
    {
        dispatch( { type: "Logout" } )
        navigate('/Metromart/')
    }

    return (
        <>
            <div className="container mt-5 mb-5" style={ { marginTop: 75 } }>
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div>
                            <a href="/Metromart/" className='text-secondary text-decoration-none'>Home</a><span className='text-secondary me-2 ms-2'> / </span>
                            <a href="/Metromart/AccountDetails" className='text-black text-decoration-none'>My Account</a>
                        </div>
                        <div>
                            <p>Welcome! <span className='text-danger'>name</span></p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className='col-8 manage-my-account m-auto mt-5 '>
                        <form method='post' className="shadow rounded p-5">
                            <div className='d-flex justify-content-between'>
                                <h3 className=' text-danger '>Edit Your Profile</h3>
                                <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
                            </div>
                            <div className="d-flex justify-content-between mt-5">
                                <div>
                                    <label htmlFor="Name" className='fw-bold'>Name</label>
                                    <input type="text" name="name"  className='form-control text-black shadow-sm bg-light text-secondary border-0 mt-2  account-inputs ' placeholder='Name' />
                                </div>
                                <div>
                                    <label htmlFor="Email" className='fw-bold'>Email</label>
                                    <input type="email" placeholder='Email' name="email" className='form-control shadow-sm text-black bg-light text-secondary border-0 mt-2 account-inputs' />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <label htmlFor="PhoneNumber" className='fw-bold'>Phone Number</label>
                                    <input type="text" name="phoneNumber" className='form-control text-black shadow-sm bg-light text-secondary border-0 mt-2 account-inputs' placeholder='Phone Number' />
                                </div>
                                <div>
                                    <label htmlFor="Address1" className='fw-bold'>Address One</label>
                                    <input type="text" placeholder='Address One' name="address1" className='form-control shadow-sm text-black bg-light text-secondary border-0 mt-2 account-inputs' />
                                </div>
                            </div>

                            <label htmlFor="Address2" className='fw-bold mt-4'>Address Two</label>
                            <input type="text" placeholder='Address Two' name="address2" className='form-control shadow-sm text-black bg-light text-secondary border-0 mt-2 address2-input' />

                            <label htmlFor="PasswordChanges" className='fw-bold mt-4'>Password Changes</label>
                            <input type="password" name="currentPassword" placeholder='Current Password' className='form-control text-black shadow-sm bg-light text-secondary border-0 mt-2' style={ { height: 50 } } />
                            <input type="password" name="newPassword" placeholder='New Password' className='form-control text-black shadow-sm bg-light text-secondary border-0 mt-2' style={ { height: 50 } } />
                            <input type="password" name="confirmNewPassword" placeholder='Confirm New Password' className='form-control text-black shadow-sm bg-light text-secondary border-0 mt-2' style={ { height: 50 } } />

                            <div className="d-flex justify-content-end mt-5">
                                <div>
                                    <a className='btn me-3'>Cancel</a>
                                    <button className='btn btn-danger' type='submit'>Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountDetails;