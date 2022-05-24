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

    const handleQuantity = e => {
        console.log(e.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
       
        const booking = {
            bookingId: id,
            name : user.displayName,
            email: user.email,
            address : event.target.address.value,
            phone : event.target.phone.value,
            orderQuantity : event.target.quantity.value

        }
        

        console.log(booking);
        const url = `http://localhost:5000/booking`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('item added successfully!!!');
                // event.target.reset();


            })

    }
    return (
        <div className='container w-5/6 m-20 flex '>
            <div>
                <div className="card card-compact w-1/2 mx-20 bg-base-100 shadow-xl ">
                    <figure><img src={part.img} alt="image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-cyan-500">{part.name}</h2>
                        <p><span className='font-bold'>Price :</span> {part.price}</p>
                        <p><span className='font-bold'>Short Description :</span> {part.description}</p>
                        <p><span className='font-bold'>Available Quantity :</span> {part.available_Quantity}</p>
                        <p><span className='font-bold'>Minimum Order Quantity :</span> {part.min_order_Quantity}</p>
                    </div>

                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="text-center w-5/6 mx-auto mt-8 ">
                    <h1 className="block m-6 text-4xl font-semibold text-black">Place Order</h1>
                    <label for="income" className="text-black text-2xl font-semibold">Name:</label>
                    <input id="income-input" type="text" name="name" value={user.displayName} disabled
                        className=" w-full mb-4 mx-auto border-bfocus:outline-none p-1 rounded-md border-2 border-green-500 text-center font-semibold" />
                    <div>
                        <label for="food" className=" text-black text-2xl font-semibold">Email:</label>
                        <input id="food-input" type="email" name="email" value={user.email} disabled
                            className=" w-full mb-4 mx-auto border-bfocus:outline-none p-1 rounded-md border-2 border-green-500 text-center font-semibold" />
                    </div>
                    <div>
                        <label for="rent" className="text-black text-2xl font-semibold">Address:</label>
                        <input id="rent-input" type="text" name="adress"
                            className=" w-full mb-4 mx-auto border-bfocus:outline-none p-1 rounded-md border-2 border-green-500 text-center font-semibold" />
                    </div>
                    <div>
                        <label for="cloths" className="text-black text-2xl font-semibold">Phone No.:</label>
                        <input id="cloths-input" type="number" name="phone"
                            className="w-full mb-4 mx-auto border-bfocus:outline-none p-1 rounded-md border-2 border-green-500 text-center font-semibold" />
                    </div>
                    <div>
                        <label className="text-black text-2xl font-semibold">Order Quantity:</label>
                        <input type="text" name='quantity' onChange={handleQuantity}
                            className="w-full mb-4 mx-auto border-bfocus:outline-none p-1 rounded-md border-2 border-green-500 text-center font-semibold" />
                    </div>

                    <input type="submit" value='Purchase'
                        className="bg-slate-400 px-6 py-2 rounded border-2 border-white font-semibold hover:bg-green-400" />
                    {/* <!-- error handelling  --> */}
                    <div className="error-section">
                        <p id="error-msg" className="error "><i className="fa-solid fa-square-xmark"></i> expenses can't be greater
                            than income. Please give a valid input in each field.</p>
                    </div>
                </div>
            </form>


            {/* <h2 className='text-2xl text-cyan-500'>Complete Your Purchase</h2>
                <form >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input value={user.name} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input value={user.email} type="email" placeholder="Email" disabled className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address:</span>
                        </label>
                        <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone No.:</span>
                        </label>
                        <input type="number" placeholder="Phone No." className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Order Quantity:</span>
                        </label>
                        <input type="number" placeholder="Order Quantity" name='Quantity' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input type="submit" value="Restock" className='m-3 p-2 bg-cyan-500 rounded-full' />

                </form>

            </div> */}
        </div >

    );
};

export default Purchase;