import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = (data) => {
        console.log(data);
        const url = `http://localhost:5000/parts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('product added successfully!!!');
                // event.target.reset();


            })
    };
    return (

        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-secondary font-bold">Add your Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <div className="form-control w-full max-w-xs m-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                        </div> */}
                        <div className="form-control w-full max-w-xs m-4">
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />

                        </div><div className="form-control w-full max-w-xs m-4">
                            <input
                                type="number"
                                placeholder="Price per unit"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs m-4">

                            <input
                                type="text"
                                placeholder="description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'description is Required'
                                    }
                                })}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs m-4">

                            <input
                                type="number"
                                placeholder="Minimum Order Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("min_order_Quantity", {
                                    required: {
                                        value: true,
                                        message: 'quantity is Required'
                                    }
                                })}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs m-4">

                            <input
                                type="number"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("available_Quantity", {
                                    required: {
                                        value: true,
                                        message: 'available quantity is Required'
                                    }
                                })}
                            />

                        </div>
                        <button
                            type='submit'
                            className="btn btn-secondary  m-5"
                        >Add Product</button>
                    </form>
                </div>
            </div >
        </div>

    );
};
export default AddProduct;