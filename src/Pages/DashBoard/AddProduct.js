import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const imageStorageKey = 'aacb0ffadb638065a6d27e5d793cd159';


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const products = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        min_order_Quantity: data.min_order_Quantity,
                        available_Quantity: data.available_Quantity,
                        img: img
                    }
                    // send to your database 
                    fetch('https://protected-caverns-27615.herokuapp.com/parts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset();

                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })

                }

            })
    }


    return (

        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-secondary font-bold">Add your Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                        message: 'price is Required'
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
                        <div className="form-control w-full m-4 max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
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
                <ToastContainer />
            </div >
        </div>

    );
};
export default AddProduct;