import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState([]);

    // const imageStorageKey = 'aacb0ffadb638065a6d27e5d793cd159';
    useEffect(() => {
        fetch('https://protected-caverns-27615.herokuapp.com/profile')
            .then(res => res.json())
            .then(data => setProfile(data));
    })

    const onSubmit = (data) => {
        const profile = {
            name: user.displayName,
            email: user.email,
            education: data.education,
            phone: data.location,
            linkedin: data.linkedin,

        }
        fetch(`https://protected-caverns-27615.herokuapp.com/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json(profile)
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    reset();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    //     // const image = data.image[0];
    //     // const formData = new FormData();
    //     // formData.append('image', image);
    //     // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    //     // fetch(url, {
    //     //     method: 'PUT',
    //     //     body: formData
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(result => {
    //     //         if (result.success) {
    //     //             const img = result.data.url;
    //     const profile = {
    //         name: user.displayName,
    //         email: user.email,
    //         education: profile.education,
    //         phone: profile.location,
    //         linkedin: profile.linkedin,


    //         // img: img
    //     }
    //     // send to your database 
    //     fetch(`https://protected-caverns-27615.herokuapp.com/profile/${user.email}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify(profile)
    //     })
    //         .then(res => res.json())
    //         .then(inserted => {
    //             if (inserted.insertedId) {
    //                 toast.success('updated successfully')
    //                 reset();

    //             }
    //             else {
    //                 toast.error('Failed to update');
    //             }
    //         })

    // }


    // }


    return (
        <div>
            <h2 className='text-center text-secondary text-3xl'>My Profile</h2>
            <div className='flex text-center m-20'>
                <div class="card w-96 bg-base-100 shadow-xl m-5">
                    <div class="card-body">
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={profile.img} />
                            </div>
                        </div>
                        <h2 class="card-title">{user.displayName}</h2>
                        <p>Email : {user.email}</p>
                        <p>Education : {profile.education}</p>
                        <p>City/District : {profile.location}</p>
                        <p>Phone no: : {profile.phone}</p>
                        <p>linkedIn ID : {profile.linkedin}</p>

                    </div>
                </div>

                <div className='m-5'>
                    <h2 className="text-center text-2xl text-secondary font-bold">Update Your Profile here</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs m-4">
                            <input
                                type="text"
                                placeholder="Education"
                                className="input input-bordered w-full max-w-xs"
                                {...register("education")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs m-4">
                            <input
                                type="text"
                                placeholder="Location"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'country is Required'
                                    }
                                })}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs m-4">
                            <input
                                type="number"
                                placeholder="Phone No."
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'country is Required'
                                    }
                                })}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs m-4">
                            <input
                                type="url"
                                placeholder="linkedIn link"
                                className="input input-bordered w-full max-w-xs"
                                {...register("linkedin")}
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
                        >Update</button>
                    </form>

                </div>
            </div>
            <ToastContainer />


        </div>
    );
};

export default MyProfile;
