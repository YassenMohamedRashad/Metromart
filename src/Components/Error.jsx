import React from 'react';

function Error() {
    return (
        <div className=''>
            <center>
                <h1>404 Not Found</h1>
                <p>your visited page not found, you may go home page.</p>
                <a href='/Metromart' className=' btn-danger btn'>Back to home page</a>
            </center><br />
        </div>
    );
}

export default Error;
