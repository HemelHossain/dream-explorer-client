import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [servicesData, setServiceData] = useState([]);
    useEffect(() =>{
        fetch('https://dream-explorer-server.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServiceData(data));
    }, []) 
    return (
        <div className='max-w-screen-lg mx-auto mt-28'>
            <h4 className='text-color md:text-left md:text-lg sm:text-base sm:text-center'>CHOOSE YOUR PLACE</h4>
            <h2 className='md:text-left md:text-6xl sm:text-4xl font-extrabold sm:text-center'>POPULAR <span className='text-color'>TOURS</span></h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-4'>
            {
                servicesData.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
        </div>
        
    );
};

export default Services;

// #1cbcc5
// #0882A7