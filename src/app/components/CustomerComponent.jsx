import React from 'react';

const CustomerComponent = ({ customer }) => {
  if (!customer) return <p>No customer data available</p>;

  return (
    <div>
      <h1>Customer Details</h1>
      <p><strong>Name:</strong> {customer.name}</p>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>
      <p><strong>Address:</strong> {customer.address}</p>
      <p><strong>Purchase Satisfaction:</strong> {customer.satisfaction}</p>
    </div>
  );
};

export default CustomerComponent;
