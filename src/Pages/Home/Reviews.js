import React from 'react';
import prople1 from '../../images/people1.png';
import prople2 from '../../images/people2.png';
import prople3 from '../../images/people3.png';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: "Mark Winn",
            comment: '',
            img: prople1,
            country: "Florida, USA"
        },
        {
            _id: 2,
            name: "Winn Flow",
            comment: " ",
            img: prople2,
            country: "Montreal, Canada"
        },
        {
            _id: 3,
            name: "Nick Jonas",
            comment: " ",
            img: prople3,
            country: "California, USA"
        }
    ]
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