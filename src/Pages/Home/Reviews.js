import React, { useEffect, useState } from 'react';

import Review from './Review';

const Reviews = () => {
    const [reviews , setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    })
    return (
        <div className='container ps-20'>
            <div className='mt-20'>
                <h2 className='text-cyan-500 text-3xl font-bold text-center'>Client Reviews!</h2>
                <h3 className=' text-4xl text-center '>What our Clients say!</h3>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );

};

export default Reviews;