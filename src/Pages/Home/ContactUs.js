import React from 'react';
import manager from '../../images/manager.jpg'

const ContactUs = () => {
    return (
        <div className='container  px-4'>
            <h2 className='text-center mt-20 text-3xl '>For Any confusion or query</h2>
            <h1 className='text-center m-2 text-5xl font-bold text-cyan-500'>Contact Us</h1>
            <div className='flex mx-auto'>
                <img src={manager} alt="" className='w-1/3 mx-20' />
                <div className='text-2xl m-10'>
                    <h1>Name: Jack Grover</h1>
                    <h2>Designation : Marketing Manager</h2>
                    <p>Contact No: 01721123456</p>
                    <p>Email: jackgrover@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;