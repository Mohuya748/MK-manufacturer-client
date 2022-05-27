import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
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
                    const reviews = {
                        name: data.name,
                        country: data.country,
                        comment: data.comment,
                        img: img
                    }
                    // send to your database 
                    fetch('https://protected-caverns-27615.herokuapp.com/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(reviews)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('review added successfully')
                                reset();

                            }
                            else {
                                toast.error('Failed to add the review');
                            }
                        })

                }

            })
    }
    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl text-secondary font-bold">Add your review here</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs m-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />

                            </div>
                            <div className="form-control w-full max-w-xs m-4">
                                <input
                                    type="country"
                                    placeholder="Country"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("country", {
                                        required: {
                                            value: true,
                                            message: 'country is Required'
                                        }
                                    })}
                                />

                            </div>

                            <div className="form-control w-full max-w-xs m-4">

                                <textarea
                                    placeholder="comment"
                                    className="textarea textarea-secondary"
                                    {...register("comment", {
                                        required: {
                                            value: true,
                                            message: 'comment is Required'
                                        }
                                    })}
                                ></textarea>
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
                            >Add Review</button>
                        </form>
                    </div>
                    <ToastContainer />
                </div >
            </div>

        </div>
    );
};

export default AddReview;