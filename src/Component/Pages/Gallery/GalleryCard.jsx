import React from 'react';


const GalleryCard = ({data}) => {
    const {title, imageUrl} = data;
    return (
      <div className="max-w-md mx-auto overflow-hidden shadow-lg rounded-lg relative">
      <img className="w-80 h-48" src={imageUrl} alt="Image" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-10 text-white p-2">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div> 
    );
};

export default GalleryCard;