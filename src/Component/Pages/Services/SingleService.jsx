import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiCalendar } from "react-icons/hi2";
import { FaLocationDot, FaOdnoklassniki } from "react-icons/fa6";

const SingleService = () => {
    const {_id, title, imageUrl, time, location, price, activities, description}  = useLoaderData();
    return (
        <div className='mx-20 mt-36 xs:mx-4'>
            <div className="card card-compact bg-base-100 shadow-xl p-4 xs:px-0">
  <figure><img className=' rounded h-96 object-cover xs:px-2' src={imageUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{title}</h2>
    <div className='flex space-x-9 text-lg md:text-xl sm:text-sm xs:text-xs'>
        <h2 className="flex xs:text-base items-center"><HiCalendar className='md:text-xl sm:text-sm mr-1' /> {time}</h2>
        <h2 className="flex xs:text-base items-center"><FaLocationDot className='text-red-600 md:text-base sm:text-base mr-1' /> {location}</h2>
        <h2 className="text-sm flex items-center"><FaOdnoklassniki className='sm:text-sm' />activities  {activities}</h2>
    </div>
    <p className='md:text-lg sm:text-base text-justify xs:text-xs'>{description}</p>
    <div className='flex justify-between items-center'>
    <h4 className='text-2xl text-red-600 font-bold'>{price}</h4>
    <div className="card-actions">
    <Link to={`/checkout/${_id}`}>
      <button  className="bg-color text-white py-2 text-base rounded-2xl">Book Now</button> </Link>
    </div>
    </div>
    
  </div>
</div>
        </div>
        
    );
};

export default SingleService;