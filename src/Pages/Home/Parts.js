import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts , setParts] = useState([]);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data));
    })
    return (
        <div className='container mx-auto px-4'>
        <h1 className='text-center m-20 font-bold text-2xl'>Manufacturing Parts of Garments Machine</h1>
        <div  className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
            {
               parts.slice(0,6).map(part => <Part key={part._id} part={part}></Part>)
            }
        </div>
       
    </div>
    );
};

export default Parts;