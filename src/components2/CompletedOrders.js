import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompletedOrders = () => {
  const [completedOrders, setCompletedOrders] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setCompletedOrders([
      { id: 1, recipient: 'Alice Brown', address: '321 Cedar St', deliveryDate: '2024-12-25' },
      { id: 2, recipient: 'Charlie Green', address: '654 Pine Ave', deliveryDate: '2024-12-24' },
      { id: 3, recipient: 'Dana White', address: '987 Maple Rd', deliveryDate: '2024-12-23' },
    ]);
  }, []);

  const filteredOrders = completedOrders.filter(order => 
    order.recipient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5 p-4 glass-effect" id="ordcompletemp">
      <h2 className="text-center mb-4">Completed Orders</h2>

      <div className="form-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by recipient name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredOrders.length > 0 ? (
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>Recipient Name</th>
              <th>Delivery Address</th>
              <th>Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id} className="fade-in">
                <td>{order.id}</td>
                <td>{order.recipient}</td>
                <td>{order.address}</td>
                <td>{order.deliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No completed orders found.</p>
      )}
    </div>
  );
};

export default CompletedOrders;