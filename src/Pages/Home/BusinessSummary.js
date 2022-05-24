import React from 'react';
import { FlagIcon,UserGroupIcon,CollectionIcon,CurrencyBangladeshiIcon,EmojiHappyIcon } from '@heroicons/react/solid'



const BusinessSummary = () => {

    return (
        <div className='text-center'>
            <h1 className='text-5xl text-cyan-500 text-center font-bold mt-20'>Want Some Garments Machine Parts?</h1>
            <h2 className='text-3xl font-semi-bold text-center mb-20'>Be Our Clients to ge the great Deal!!</h2>

            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Countries</div>
                    <div className="stat-value">31+</div>
                    <div className="stat-desc text-center"> <FlagIcon className="h-15 w-15 text-blue-500"/></div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">420+</div>
                    <div className="stat-desc"> <UserGroupIcon className="h-15 w-15 text-blue-500"/></div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Parts</div>
                    <div className="stat-value">50+</div>
                    <div className="stat-desc"> <CollectionIcon className="h-20 w-20 text-blue-500"/></div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-value">40M+</div>
                    <div className="stat-desc"> <CurrencyBangladeshiIcon className="h-15 w-15 text-blue-500"/></div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value">300+</div>
                    <div className="stat-desc"> <EmojiHappyIcon className="h-15 w-15 text-blue-500"/></div>
                </div>

            </div>
        </div>

    );
};

export default BusinessSummary;