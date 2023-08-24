import React, { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard';

const Gallery = () => {
    const [galleryData, setGalleryData] = useState([]);
    useEffect(() =>{
        fetch('https://dream-explorer-server.vercel.app/gallery')
        .then(res => res.json())
        .then(data => {
            setGalleryData(data)
        })
    }, [])
    return (
        <div className='max-w-screen-lg mx-auto mt-28'>
            <h4 className='text-color md:text-left md:text-lg sm:text-base sm:text-center xs:ml-4'>TOP DESTINATION</h4>
            <h2 className='md:text-left md:text-6xl sm:text-4xl font-extrabold xs:ml-4 sm:text-center'>POPULAR <span className='text-color'> DESTINATION</span></h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6 gap-8 px-0'>
            {
                galleryData.map(data => <GalleryCard key={data._id} data={data}></GalleryCard>)
            }
        </div>
        </div>
        
    );
};

export default Gallery;