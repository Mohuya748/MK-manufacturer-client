import React from 'react';
import footer from '../../images/footer.jpg'

const Footer = () => {
    return (
        <div className='p-10 mt-20' style={{ background: `url(${footer})`, backgroundSize: 'cover' }}>
            <footer className="footer p-10">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 text-black text-bold">
                <div>
                    <p>Copyright © 2022 - All right reserved by MK Garments Machine Parts Manufacturer</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;