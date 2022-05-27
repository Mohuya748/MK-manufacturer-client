import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [info, setInfo] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('https://protected-caverns-27615.herokuapp.com/profile')
            .then(res => res.json())
            .then(data => setInfo(data));

    })
    return (

        <div class="card w-96 bg-base-100 shadow-xl m-5">
            <div class="card-body">
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={info.img} />
                    </div>
                </div>
                <h2 class="card-title">{user.displayName}</h2>
                <p>Email : {user.email}</p>
                <p>Education : {info.education}</p>
                <p>City/District : {info.location}</p>
                <p>Phone no: : {info.phone}</p>
                <p>linkedIn ID : {info.linkedin}</p>

            </div>
        </div>

    );
};

export default Profile;