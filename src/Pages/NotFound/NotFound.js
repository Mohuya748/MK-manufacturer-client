import React from 'react';
import error from '../../images/error.jpg'

const NotFound = () => {
    return (
        <div className='mx-30'>
            <h1 className='text-center text-4xl text-secondary m-10'> Page not found</h1>
            <img src={error} alt="error image" />
        </div >
    );
};

export default NotFound;