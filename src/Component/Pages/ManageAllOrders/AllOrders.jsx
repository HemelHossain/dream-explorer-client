import React, { useEffect, useState } from 'react';
import AllOrderDetail from './AllOrderDetail';
import OrderRow from '../Orders/OrderRow';
import { data } from 'autoprefixer';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://dream-explorer-server.vercel.app/allorders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handleDelete = (id) =>{
        const procced = window.confirm('Are you sure you want to Delete this order');
        if(procced){
            fetch(`https://dream-explorer-server.vercel.app/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Order Deleted');
                const remaining = orders.filter(odr => odr._id !== id);
                setOrders(remaining);
            }
        })
        }
    }
    const handleUpdate = (id) =>{
        fetch(`https://dream-explorer-server.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id ===id );
                approving.status = 'Approved';
                const newOrders = [approving, ...remaining];
                setOrders(newOrders);
            }
            
        })
    }
    return (
        <div className='mt-28 sm:mt-32 mx-12'>
            <h4 className='text-xl mb-3'>ORDERS: {orders.length}</h4>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name
        </th>
        <th>Destination</th>
        <th>Price</th>
        <th>Status</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map(order => <AllOrderDetail key={order._id} order={order} handleDelete={handleDelete} handleUpdate={handleUpdate}></AllOrderDetail>)
        }
    </tbody>
    </table>
        </div>
        </div>
    );
};

export default AllOrders;   