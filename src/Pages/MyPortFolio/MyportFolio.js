import React from 'react';

const MyportFolio = () => {
    return (
        <div className='text-center'>
            <h1 className='text-4xl text-cyan-500 font-semibold m-10'> My Portfolio</h1>
            <p className='text-3xl m-5'><span className='font-semibold'>Name : </span>Rukaiya Mohuya Khandaker</p>
            <p className='text-2xl m-5'><span className='font-semibold'>Email:</span> khandakermohuya@gmail.com</p>
            <p className='text-2xl m-5'><span className='font-semibold'>Educational background :</span> B.sc in CSE </p>

            <p className='text-2xl m-5'><span className='font-semibold'>Skills : </span>
                <li>
                    🍧REACT JS
                    🍧 NODE JS
                    🍧 HTML
                    🍧 CSS
                    🍧 JSX
                    🍧 Bootstrap
                    🍧 EXPRESS
                    🍧 MONGODB
                    🍧 HEROKU
                    🍧 FIREBASE

                </li>
            </p>

            <p className='text-2xl m-5'><span className='font-semibold'>Some of my Projects live website link :</span>
                <li><a href="https://first-choice-fruits.netlify.app/" target="_blank" className='text-cyan-300'> First Choice Fruits </a></li>
                <li><a href="https://mohus-photography.netlify.app/" target="_blank" className='text-cyan-300'> Mohu's Photography</a></li>
                <li><a href="https://cost-calculation.netlify.app/" target="_blank" className='text-cyan-300'> Cost Calculation </a></li>

            </p>



        </div>
    );
};

export default MyportFolio;