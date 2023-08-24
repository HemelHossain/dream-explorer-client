import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const CoustomerOrder = () => {
    const {users} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() =>{
        fetch(`https://dream-explorer-server.vercel.app/orders?email=${users?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));

    },[users?.email])
    const handleDelete = (id) =>{
        const procced = window.confirm('Are you sure you want to cancel the order');
        if(procced){
            fetch(`https://dream-explorer-server.vercel.app/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Order cancel');
                const remaining = orders.filter(odr => odr._id !== id);
                setOrders(remaining);
            }
        })
        }
        
    }
    return (
        <div className='mt-32 mx-12'>
            <h4 className='text-xl mb-3'>ORDERS: {orders.length}</h4>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Destination</th>
        <th>Price</th>
        <th>Details</th>
        <th>Cancel
        </th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete}></OrderRow>)
        }
    </tbody>
    </table>
        </div>
        </div>
    );
};

export default CoustomerOrder;