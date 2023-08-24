import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const {users} = useContext(AuthContext);
    const navigate = useNavigate();
    const {_id, price, title} = useLoaderData();
    const userName = users.displayName; 
    const name = userName.split(' ');
    const firstName = name[0];
    const lastName = name[1];


    const handlePlaceOrder = () =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = users?.email || 'unregisterd';
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title, price,
            coustomer: name, 
                email, 
                phone, 
                message
        }


                    // Order Information 
        fetch('https://dream-explorer-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Order place successfully');
                form.reset();
                navigate('/orders')
                
            }
        })
        .catch(error => console.error(error))

    }
    return (
        <div className='md:mx-24 sm:mx-16 xs:mx-4'>
            <form onSubmit={handlePlaceOrder}>
                <h4 className="text-4xl mt-20">You are about to
                 book: {title} tour Package </h4>
                <p className='text-lg mt-2'>price: {price}</p>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-5'>
                    <input name='firstName' type="text" defaultValue={firstName} placeholder="First Name" className="input input-ghost input-bordered w-full" />
                    <input name='lastName' type="text" defaultValue={lastName} placeholder="Last name" className="input input-ghost input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost input-bordered w-full" />
                    <input name='email' type="text" defaultValue={users?.email}  placeholder="Your Email" className="input input-ghost input-bordered w-full" readOnly
                     />
                </div>
                <textarea name='message' className="mt-8 textarea textarea-bordered w-full h-24" placeholder="Your Message"></textarea>
                <input className="my-3 btn btn-outline btn-gray" type="submit" value="Book Now" />
            </form>
        </div>
    );
};

export default Checkout;