import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [part, setPart] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [])
    return (
        <div className='container m-20'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><img src={part.img} alt="image" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-cyan-500">{part.name}</h2>
                    <p><span className='font-bold'>Price :</span> {part.price}</p>
                    <p><span className='font-bold'>Short Description :</span> {part.description}</p>
                    <p><span className='font-bold'>Available Quantity :</span> {part.available_Quantity}</p>
                    <p><span className='font-bold'>Minimum Order Quantity :</span> {part.min_order_Quantity}</p>

                </div>
            </div>
        </div>

    );
};

export default Purchase;