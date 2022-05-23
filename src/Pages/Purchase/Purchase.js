import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Purchase = () => {
    const { id } = useParams();
    const [part, setPart] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [])

    const handlePurchase=(data)=>{
        console.log(data)
    }
    return (
        <div className='container w-5/6 m-20 flex '>
            <div class="card card-compact w-1/2 mx-20 bg-base-100 shadow-xl ">
                <figure><img src={part.img} alt="image" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-cyan-500">{part.name}</h2>
                    <p><span className='font-bold'>Price :</span> {part.price}</p>
                    <p><span className='font-bold'>Short Description :</span> {part.description}</p>
                    <p><span className='font-bold'>Available Quantity :</span> {part.available_Quantity}</p>
                    <p><span className='font-bold'>Minimum Order Quantity :</span> {part.min_order_Quantity}</p>

                </div>
            </div>
            <div className='w-1/2 mx-20'>
                <h2 className='text-2xl text-cyan-500'>Complete Your Purchase</h2>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name:</span>
                    </label>
                    <input value={user.name} type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email:</span>
                    </label>
                    <input value={user.email} type="email" placeholder="Email" disabled class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Address:</span>
                    </label>
                    <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Phone No.:</span>
                    </label>
                    <input type="number" placeholder="Phone No." class="input input-bordered w-full max-w-xs" />
                </div>
                
                <button
                        onClick={ handlePurchase }
                        className="btn btn-outline text-white bg-cyan-500"
                    >Buy Now</button>
            </div>


        </div>

    );
};

export default Purchase;