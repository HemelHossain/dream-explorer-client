import React from 'react';
import { HiCalendar } from "react-icons/hi2";
import { FaLocationDot, FaOdnoklassniki } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './serviceCard.css'

const ServiceCard = ({service}) => {
    const {_id, title, imageUrl, time, location, price, activities, description}  = service;
    return (
        <div className='mx-auto'>
            <div className="card card-compact bg-base-100 w-80 shadow-xl">
  <figure><img className='rounded h-44 w-72 mt-4 object-cover' src={imageUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className='flex space-x-9 text-s'>
        <h2 className="flex items-center"><HiCalendar className='text-xl mr-1' /> {time}</h2>
        <h2 className="flex items-center"><FaLocationDot className='text-red-600 text-md mr-1' /> {location}</h2>
        <h2 className="text-s flex items-center"><FaOdnoklassniki />activities  {activities}</h2>
    </div>
    

    <p>{
    description.length > 100 ? <span>{description.slice(0, 150)+ '...'}<Link className='text-red-600' to={`/services/${_id}`}>Read More</Link></span>: <span>{description}</span>
    }</p>
    <div className='flex justify-between items-center'>
    <h4 className='text-xl text-red-600 font-bold'>{price}</h4>
    <div className="card-actions">
      <Link to={`/checkout/${_id}`}>
        <button  className="bg-color text-white rounded-2xl">Book Now</button>
      </Link>
    </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default ServiceCard;