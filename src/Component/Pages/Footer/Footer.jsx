import React from 'react';
import { FaGoogle, FaFacebookF, FaTwitter, FaGithub }  from "react-icons/fa";
import { image6 } from '../../Assets/ImageJsx/Image'
const Footer = () => {
    return (
        <div className='bg-black rounded-xl text-white mt-24'>
            <img className='w-32 h-24 pt-6 ml-12' src={image6} alt="" />
            <div className='grid md:grid-cols-4 sm:grid-cols-2  gap-2 sm:gap-6 mx-10 pt-7'>
                <ul>
                    <h1 className='text-xl font-bold mb-5'>Contact Info</h1>
                    <li>4221 Melrose Street, Yakima Washington, USA</li>
                    <li>Phone: +1123 456 7890</li>
                    <li>Email: info@gmail.com</li>
                    <li>website: http://sitename.com</li>
                </ul>
                <ul>
                    <h1 className='text-xl font-bold mb-5'>Services</h1>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Gallery</li>
                    <li>Contact us</li>
                </ul>
                <ul>
                    <h1 className='text-xl font-bold mb-5'>Support</h1>
                    <li>FAQs</li>
                    <li>Contact Mr. Axe</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Affiliate Disclosure</li>
                    <li>DMCA Policy</li>
                </ul>
                <div>
                    <h1 className='text-center text-xl font-bold'>Opening Hours</h1>
                    <div className='flex items-center justify-between mt-5'>
                        <ul>
                            <li>Monday</li>
                            <li>Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                        </ul>
                        <ul>
                            <li>09:00 am-10:00 pm</li>
                            <li>09:00 am-10:00 pm</li>
                            <li>09:00 am-10:00 pm</li>
                            <li>09:00 am-10:00 pm</li>
                            <li>08:00 am-12:00 pm</li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr className='mt-10 text-slate-500 mx-10' />
            <div className='md:flex justify-between items-center mx-10 pt-9 pb-12'>
                <h1>© Copyright 2023 Dream Explorer. All Rights Reserved-Design by Hemel</h1>
                <div className='flex gap-3 sm:mt-4'>
                    <p className='bg-zinc-800 p-2'><FaGoogle className='White' /></p>
                    <p className='bg-zinc-800 p-2'><FaFacebookF /></p>
                    <p className='bg-zinc-800 p-2'><FaTwitter /></p>
                    <p className='bg-zinc-800 p-2'><FaGithub /></p>
                </div>
            </div>

        </div>
    );
};

export default Footer;