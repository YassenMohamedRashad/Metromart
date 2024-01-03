import { React, useState } from 'react'

function AccountDetails() {
    const [firstname, setFirstname] = useState('')
    const changeFirstname = event => {
        setFirstname(event.target.value)
    }
    const [secondname, setSecondname] = useState('')
    const changeLastname = event => {
        setSecondname(event.target.value)
    }

    return (
        <>
            <div className="container" style={{ marginTop: 75 }}>
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div>
                            <a href="/Metromart/" className='text-secondary text-decoration-none'>Home</a><span className='text-secondary me-2 ms-2'> / </span>
                            <a href="/Metromart/AccountDetails" className='text-black text-decoration-none'>My Account</a>
                        </div>
                        <div>
                            <p>Welcome! <span className='text-danger'>{firstname} {secondname}</span></p>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 75 }}>
                    <div className="col">
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
                    <div className='col-9' style={{ marginBottom: 200 }}>
                        <form method='post' class="shadow-sm rounded" style={{ paddingLeft: 75, paddingRight: 75, paddingTop: 50, paddingBottom: 50 }}>
                            <h4 className=' text-danger '>Edit Your Profile</h4>
                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <label htmlFor="FirstName" className='fw-bold'>First Name</label>
                                    <input type="text" name="firstname" className='form-control bg-light text-secondary border-0 mt-2' style={{ width: 350, height: 50 }} onChange={changeFirstname} />
                                </div>
                                <div>
                                    <label htmlFor="LastName" className='fw-bold'>Last Name</label>
                                    <input type="text" name="lastname" className='form-control bg-light text-secondary border-0 mt-2' style={{ width: 350, height: 50 }} onChange={changeLastname} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <label htmlFor="Email" className='fw-bold'>Email</label>
                                    <input type="email" name="email" className='form-control bg-light text-secondary border-0 mt-2' style={{ width: 350, height: 50 }} />
                                </div>
                                <div>
                                    <label htmlFor="Adress" className='fw-bold'>Address</label>
                                    <input type="text" name="address" className='form-control bg-light text-secondary border-0 mt-2' style={{ width: 350, height: 50 }} />
                                </div>
                            </div>

                            <label htmlFor="PasswordChanges" className='fw-bold mt-4'>Password Changes</label>
                            <input type="password" name="currentPassword" placeholder='Current Password' className='form-control bg-light text-secondary border-0 mt-2' style={{ height: 50 }} />
                            <input type="password" name="newPassword" placeholder='New Password' className='form-control bg-light text-secondary border-0 mt-2' style={{ height: 50 }} />
                            <input type="password" name="confirmNewPassword" placeholder='Confirm New Password' className='form-control bg-light text-secondary border-0 mt-2' style={{ height: 50 }} />

                            <div className="d-flex justify-content-end">
                                <button className='mt-5 btn btn-link text-decoration-none text-black me-3'>Cancel</button>
                                <button className='mt-5 btn btn-danger'type='submit'  style={{ width: 250, height: 60 }}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDetails;