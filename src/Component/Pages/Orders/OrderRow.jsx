import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete,}) => {
    const {_id, service, serviceName, price, coustomer, email, phone, message} = order;
    const [orderService, setOrderService] = useState([]);
    useEffect(() =>{
        fetch(`https://dream-explorer-server.vercel.app/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data))
    },[service])
    return (
            <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={orderService.imageUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{coustomer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">{orderService.location}</span>
        </td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Detail</button>
        </th>
        <th>
          <label>
            <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
      </tr>
    );
};

export default OrderRow;