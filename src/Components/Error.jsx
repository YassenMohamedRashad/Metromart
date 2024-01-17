import React from 'react';
import "../assets/css/Error.css"

function Error() {
    return (
        <div className='container d-flex justify-content-center hal'>
            <div className=' align-self-center'>
                <div className='col-12 text-center '>
                    <h1>404 Not Found</h1>
                    <p>your visited page not found, you may go home page.</p>
                    <button className=' btn-danger btn w-50'>Back to home page</button>
                </div>
            </div>
        </div>
    );
}

export default Error;
