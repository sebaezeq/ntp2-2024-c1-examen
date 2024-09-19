'use client'
import React, { useEffect, useState } from 'react';
import CustomerComponent from '@/app/components/CustomerComponent';

const CustomerPage = ({ params }) => {
  const { id } = params;
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomer = async () => {
      const res = await fetch(`https://salesbackend.azurewebsites.net/api/sales/${id}`);
      const data = await res.json();
      setCustomer(data.customer); 
      setLoading(false);
    };

    fetchCustomer();
  }, [id]);

  return (
    <div>
       <h1>Clientes</h1>
      {loading ? <p>Loading...</p> : (
        <CustomerComponent customer={customer} />
      )}
    </div>
  );
};

export default CustomerPage;
