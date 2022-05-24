import React from 'react';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner1} className="w-full h-96" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banner2} className="w-full h-96" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={banner3} className="w-full h-96" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </>


    );
};

export default Banner;