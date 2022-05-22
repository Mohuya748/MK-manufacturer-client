import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { name, _id, img, price, description, available_Quantity, min_order_Quantity } = part;
    const navigate = useNavigate();

    const navigateToPurchase = _id => {
        navigate(`/purchase`);
    }
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="image" /></figure>
            <div class="card-body">
                <h2 class="card-title text-cyan-500">{name}</h2>
                <p><span className='font-bold'>Price :</span> {price}</p>
                <p><span className='font-bold'>Short Description :</span> {description}</p>
                <p><span className='font-bold'>Available Quantity :</span> {available_Quantity}</p>
                <p><span className='font-bold'>Minimum Order Quantity :</span> {min_order_Quantity}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigateToPurchase(_id)}  class="btn btn-primary bg-cyan-300">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;