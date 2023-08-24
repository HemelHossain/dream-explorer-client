import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddService = () => {
    const handleAddService = () =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const location = form.location.value;
        const imageUrl = form.photoUrl.value;
        const price = form.price.value;
        const time = form.vacationTime.value;
        const rating = form.rating.value;
        const transfer = form.transfer.value;
        const activities = form.activities.value;
        const description = form.description.value;

        const service = {title, imageUrl, location, price, rating, transfer, activities, time, description};

        fetch('https://dream-explorer-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Service added Successfully')

            }
        })
        .catch(error => console.error(error));



    }
    return (
        <div>
            <Helmet>
                <title>Dream Explorer Add Service</title>
            </Helmet>
            <div className='md:mx-24 sm:mx-16'>
            <form onSubmit={handleAddService}>
                <h4 className="text-4xl mt-28 sm:mt-32">Adding a service </h4>
                <div className='grid  sm:grid-cols-1 mt-3'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-10'>
                        <div>
                            <label className='block text-xl  mb-1 ml-1'>Title</label>
                            <input name='title' type="text" placeholder="Enter service Title" className="input input-md input-ghost input-bordered w-full mb-3" />
                        </div>
                        <div>
                            <label className='block text-xl  mb-1 ml-1'>Location</label>
                            <input name='location' type="text" placeholder="Enter service Location" className="input input-ghost input-bordered w-full mb-3" />
                        </div>
                        <div>
                            <label className='block text-xl  mb-1 ml-1'>Price</label>
                            <input name='price' type="text" placeholder="Service Price" className="input input-ghost input-bordered w-full mb-3"/>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 md:gap-10 mt-3'>
                        <div>
                            <label className='block text-base  mb-1 ml-1'>Rating</label>
                            <input name='rating' type="text" placeholder="Enter service rating" className="input input-ghost input-bordered w-full mb-3" />
                        </div>
                        <div>
                            <label className='block text-base  mb-1 ml-1'>Transfer</label>
                            <input name='transfer' type="text" placeholder="How many Transfer" className="input input-ghost input-bordered w-full mb-3" />
                        </div>
                        <div>
                            <label className='block text-base  mb-1 ml-1'>Activities</label>
                            <input name='activities' type="text" placeholder="How many Activities" className="input input-ghost input-bordered w-full mb-3" />
                        </div>
                     </div>
                    <label className='block text-xl  mb-1 ml-1'>Photo URL</label>
                    <input name='photoUrl' type="text" placeholder="Enter PhotoUrl" className="input input-ghost input-bordered w-full mb-4" />
                    
                    <label className='block text-xl  mb-1 ml-1'>Vacation Time</label>
                    <input name='vacationTime' type="text" placeholder="How many days you want spent" className="input input-ghost input-bordered w-full"
                     />
                </div>
                <label className='block text-xl  mb-1 ml-1 mt-4'>Description</label>
                <textarea name='description' className="textarea textarea-bordered w-full h-24" placeholder="Service Description"></textarea>
                <input className="my-3 btn btn-outline btn-gray" type="submit" value="Add Service" />
            </form>
        </div>
        </div>
    );
};

export default AddService;