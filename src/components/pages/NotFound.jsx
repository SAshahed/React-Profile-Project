import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>
                This Page not here ,please try correctly.
            </p>
            <p className='notfound'>
                Go to the <Link to="/">Home Page.</Link>
            </p>
        </div>
    );
};

export default NotFound;