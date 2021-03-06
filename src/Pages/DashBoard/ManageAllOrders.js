import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`https://protected-caverns-27615.herokuapp.com/booking?email=${user.email}`,
                {
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            ).then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user])

    return (
        <div>
        <h2>My Orders: {orders.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Adress</th>
                        <th>Phone NO.</th>
                        <th>Order Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.name}</td>
                            <td>{a.email}</td>
                            <td>{a.address}</td>
                            <td>{a.phone}</td>
                            <td>{a.orderQuantity}</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageAllOrders;