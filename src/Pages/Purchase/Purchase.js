import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Purchase = () => {
    const { id } = useParams();
    const [part, setPart] = useState([]);
    const [user] = useAuthState(auth);
    const [tPrice, setTprice] = useState(1);



    useEffect(() => {
        const url = `https://protected-caverns-27615.herokuapp.com/parts/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [])

    const handleQuantity = e => {
        console.log(e.target.value);
    }

    // const handlePrice
    //     = event => {
    //         const orderQuantity = event.target.quantity.value;
    //         const totalPrice = orderQuantity * part.price;
    //         setTprice(totalPrice) ;
    //     }


    const handleBooking = (event) => {
        event.preventDefault();

        const booking = {
            bookingId: id,
            name: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
            orderQuantity: event.target.quantity.value

        }
        // const totalPrice = orderQuantity * part.price;
        // setTprice(totalPrice)


        console.log(booking);
        const url = `https://protected-caverns-27615.herokuapp.com/booking`;
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
                alert('order added successfully!!!');
                event.target.reset();


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
            <div className="text-center w-5/6 mx-auto ">
                <h2 className='text-3xl text-secondary'>Place Order</h2>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="quantity" placeholder="order quantity" className="input input-bordered w-full max-w-xs" />
                    <p>total price :{tPrice} </p>
                    <input type="submit" value="purchase" className="btn btn-secondary w-full max-w-xs" />
                </form>




            </div>
        </div >

    );
};

export default Purchase;