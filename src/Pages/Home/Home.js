import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';
import ManufacturingProcess from './ManufacturingProcess';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <ManufacturingProcess></ManufacturingProcess>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;