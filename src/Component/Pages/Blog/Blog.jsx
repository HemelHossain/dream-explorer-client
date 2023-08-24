import React from 'react';
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { image3 } from '../../Assets/ImageJsx/Image';

const Blog = () => {
    return (
        <div className='max-w-screen-lg flex md:flex-row sm:flex-col-reverse xs:flex-col-reverse items-center justify-between sm:text-center xs:text-center md:text-left mx-auto mt-28'>
            <div className='w-3/4 md:mt-0 sm:mt-8'>
                <h4 className='text-color'>We  Provide Top Destinations Especially Book Now and chill!</h4>
                <h2 className='text-5xl xs:text-4xl font-extrabold text-blue-900'>DISCOVER THE <span className='text-color'>WORLD</span></h2>
                <h2 className='text-5xl xs:text-4xl mt-2 font-extrabold text-blue-900'>WITH OUR GUIDE</h2>

                <p className='mr-10 mt-5 sm:text-center xs:mx-auto md:text-left text-justify '>Dream Explorer offers a wide range of travel packages to destinations all over the world, from budget-friendly options to luxurious experiences. We cater to families, couples, and solo travelers. Our experienced travel agents will work with you to create a customized itinerary that fits your needs and budget. We also offer a 100% satisfaction guarantee.Contact us today to start planning your dream vacation!</p>
                <div className='flex mt-5 items-center'>
                   <p> <FaCheckCircle className='mr-2  w-6 h-8 text-color' /></p> <p>20 Years of Experience</p></div>
                <h4 className='flex items-center'><FaCheckCircle className='mr-2 w-6 h-8 text-color' /> 150+ Tour Destinations</h4>
                <div className='flex items-center mt-3 sm:mx-auto'>
                    <p><FaPhoneAlt className='text-color w-8 mr-3 h-16' /></p>
                    <div>
                        <p>For information</p>
                        <p>855 333 4444</p>
                    </div>
                </div>
            </div>
            <div className='1/4'>
                <img className='img xs:w-80' src={image3} alt="" />
            </div>
        </div>
    );
};

export default Blog;