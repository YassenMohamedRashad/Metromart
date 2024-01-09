import React from 'react';
import "../assets/css/Billing.css"

function BillingDetails() {
    return (
        <div className='container'>
            <div className="row">
                <h6><a href="#1">Account</a> / <a href="#2">My Account</a> / <a href="#3">Product</a> / <a href="#4">View Cart</a> / <a href="#5">ChechOut</a></h6><br /><br />
                <div className="col-md-4 col-lg-6 col-sm-12">
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

                <div className='col-md-4 col-lg-6 col-sm-12 text-center'>

                    <div className='row mt-5'>
                        <div className='col-md-2 col-sm-12'>
                            <img className='size-img' src="data:image/jpeg;base64,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" alt="product-that-will-bought" />
                        </div>
                        <div className='col-md-3 m-auto col-sm-12'>
                            Wired Joystick
                        </div>
                        <div className='col-md-3 m-auto col-sm-12'>
                            $50
                        </div>
                    </div>

                    <div className='row w'>
                        <div className='col-md-2 col-sm-4'>
                            <img className='size-img' src="data:image/jpeg;base64,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" alt="product-that-will-bought" />
                        </div>
                        <div className='col-md-3 m-auto col-sm-4'>
                            Wired Joystick
                        </div>
                        <div className='col-md-3 m-auto col-sm-4'>
                            $50
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-5 mt-4'>
                            <h5>Subtotal:</h5>
                        </div>
                        <div className='col-3 m-auto'>
                            $50
                        </div><br /><br /><br /><hr />
                    </div>

                    <div className='row'>
                        <div className='col-5 mt-4'>
                            <h5>Shipping:</h5>
                        </div>
                        <div className='col-3 m-auto'>
                            Free
                        </div><br /><br /><br /><hr />
                    </div>

                    <div className='row'>
                        <div className='col-5 mt-4'>
                            <h5>Total:</h5>
                        </div>
                        <div className='col-3 m-auto'>
                            $5000
                        </div><br /><br /><br /><hr />
                    </div>

                    <div className='row'>
                        <div className="form-check col-5">
                            <input className="form-check-input" type="radio" name="exampleRadios" value="option1" />
                            <label className="form-check-label" >
                                Bank
                            </label>
                        </div>
                        <div className='col-5'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAXCAMAAABponzPAAAAkFBMVEX///8AAADz2Jz5+fnt7e3z8/Nqamr14Kzh4eHc3Nz24a+2trZ9fX3U1NTy1Y+lpaWfn5+8vLzx0X/89OT568389+r+/PjvynT679n247bz2Zbvy3Dy1IXMzMzCwsLn5+dcXFw+Pj6JiYlRUVH46MPuyWjtw1aWlpbrvkpJSUkvLy8REREfHx/quT7swWLkpQDjeGA7AAACAElEQVQ4jZVUDZObIBBdFoWIBL8wApJolMS76/X6//9d0dy0197MtTLOwjIs7+2+RYBtNKEOGvaPhnMbRNgfiFpro3m7H1EHRN2c9kO6ruv8fsAWu7qLn9kZx3trnXNobuofJ9M/POUa6O+3ukeN3ZdxhwIgG9YVPQLYO+fOee/R96K7vV+dJ+t0lJt3Pq72cslKGGQCtCoqCqfOnoBb3jvrbBvwXczzwx62aYuDsUiWSJbCka6ufYodE5S5WQwC2r7/ix5lkd+FQkYHoFPckMmDKjoNJgohtOCNabF+F3PcbDGUwCB7XqKFlJEHdjqeZ7hjFAEjstDuHk7i6aHJmZCX+UoIkew6vpASCPlG8oqQmY2vZCISvLIA8TAPRp+M8ZFAUjHymiZ5kSeHyzItl5hXrEierkUrl+K8Zb0FtvqkTGgaw7k3MBTl4Ws9k5i3qtG0TTAea69qx7//b8NqDLFpbEDllFIBOUApJ/qrqB+OlgPID26vBPcc3zz3grvIFObjlAGBig1VLlmsJ6PXuANsqa7AUiZhLOMNobcoXP3j5mMHqHpVopqOucwuEzuzCCNB0rlaFVymdT2OlK3igvVC1FZZh8LjymGW80FmrBqmSzUSYLJMr3JFTLIxIk4RlG6c9R29Qqdcj59rcKCf934P4WNhPO5/yTHTN9z34/gJvTkktWSEW9wAAAAASUVORK5CYII=" alt="" />
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAA0AOAMBEQACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAACBwMEBv/EAC4QAAICAQIDBgQHAAAAAAAAAAECAxEEABIhMVEFBhMiQWEUFSPBB0JxgZGhsf/EABgBAQEBAQEAAAAAAAAAAAAAAAAFBgQD/8QAIBEAAgICAgIDAAAAAAAAAAAAAAECAwQREjEh8AVRcf/aAAwDAQACEQMRAD8AcWHl5UkNyYzObIDRutEfuRoCSafKMTCHDcSV5S7LQPvx0BX8XtTxUBjiVTQJJHPmeF9LGgJ3yplaJfhnDE8RuQ7hX5fMPb00AL5GYXPh4p28K3MvDnzon1r+/wBNAYbvRhLnd9JxI30ocZJHUGi4o8L9NTr61O7z9GpwLnVgR1220VO2MCLDT4jGpEVgjoLongQRZNc+vpriysaKXKJ7Y18rXwn++9DDTsnGSNYwZCoTZRb03bv5vV4yAXy2Lc5Ly07FiA1c6v8Awe+gCfs+F1iUl/pKVWj1FffQBHDQqq75BUZjJsWR76AD5bBtUXJ5dtHd00AtPxByp8bvPlLA5TxsaNHI51x4am5MmrHo2Xw1UJ4cXJdNmcizsgY7YxkLRMwYqxuiOmuWTetFSVMOXPXk/9k=" alt="" />
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIACEAOAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYHAf/EAC0QAAIBAwMBBwIHAAAAAAAAAAECAwAEEQUSITETFSJBUWGBFFIjMjNxcrHx/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAiEQEAAAMIAwAAAAAAAAAAAAAAAiNhARNBQlKBwfAREiH/2gAMAwEAAhEDEQA/APcaUpQaby5js7WS5nJEcYycDJrnLjUNUWz7/juLcWqAk2TMAGj/AJ/f/lX+qWY1DT57QuU7VcBgM4NchrNheHXOxsbISxm6WZIpMiHPZnxt7BufjFZ47Y76HTz97ul1+mX8Gp2EN5aljFKMjcMEc4IPyDUqoOh6f3VpUFl2plMYOXIxkkknj9zU6tCClKUEb6617VojOgdTgqTjFfBqFmTgXUXPTxjmq/UpHaSVLLT47iVCAS8XTgnzIz5Y59axuEBt2SHR9sm0eJ0RQT9vhbIJ6D0zXO28w8CwlvrXbIjS8A7G2gnGV3f1zVcbaw24OsXJU4AAuumPSt8ShGgS502LfKfGyIDtATOT18yV+fetXb27Kwh0KWQIBtHYouQSRxkjyGaibQWX19mAAbqH5cVjJqdlGjObhCqjJKndjnHl71XLuJZRojIm9gdyRvvXHB/MMcnpzWTrOkEKnSImc/qBEUrjceBz16H5pNoLIX1qZFjW4jLsdoUNzmlQYdi3CJ3TsDS/hsYkXZxyeCecj28vSlXh9swtqUpVgpSlApSlApSlB//Z" alt="" />
                        </div>
                        <div className="form-check col-5 mt-2">
                            <input className="form-check-input" type='radio' name="exampleRadios" value="option2" />
                            <label className="form-check-label">
                                Cash on delivery
                            </label>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <input className='w-50 form-control col-6' placeholder='Coupon Code' type="text" />
                        <button className='btn btn-danger col-4 text-light m-auto'>Apply Coupon</button>
                    </div>

                    <div className='row'>
                        <button className='btn btn-danger text-light mt-4 w-25'>Place Order</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default BillingDetails;