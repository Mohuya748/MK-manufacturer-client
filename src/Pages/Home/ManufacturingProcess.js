import React from 'react';
import framing from '../../images/framing.png'
import screwing from '../../images/screwing.jpg'
import logo from '../../images/logo.jpg'

const ManufacturingProcess = () => {
    return (
        <div className='container mx-auto px-4'>
            <h1 className='text-center m-20 text-5xl font-bold text-cyan-500'>Manufacturing Process</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={framing} alt=" " /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Frame machining</h2>
                        <p>This machining takes place while large numbers of cutting tools such as a superparticulate tool are exchanged automatically using a program adapted to the sewing machine type.</p>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={screwing} alt=" " /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Masking</h2>
                        <p>The machine is masked before the painting to block parts with screwholes that are not to be painted.</p>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={logo} alt=" " /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Printing logo</h2>
                        <p>After painting by robot, this process performs print dryness and prints a logo. This process runs manually, under the concept of careful handling, one by one.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManufacturingProcess;