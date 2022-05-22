import React from 'react';

const Review = ({review}) => {
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">     
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repudiandae beatae a doloremque odit earum officiis nisi ipsum quae aliquam.</p>
                <div className="flex">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div className='items-center justify-center'>
                            <h2 className='font-bold'>{review.name}</h2>
                            <p>{review.country}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Review;