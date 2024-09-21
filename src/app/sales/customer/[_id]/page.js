'use client'; 

import { useState, useEffect } from "react";

const CustomerDetailPage = ({ params }) => {
  const { id } = params; 
  const [customer, setCustomer] = useState({
    gender: 'Cargando...',
    age: 'Cargando...',
    email: 'Cargando...',
    satisfaction: 'Cargando...'
  });

  useEffect(() => {
    fetch(`https://salesbackend.azurewebsites.net/api/customers/${id}`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>Detalles del Cliente</h1>
      <p>Género: {customer.gender}</p> 
      <p>Edad: {customer.age}</p>
      <p>Email: {customer.email}</p>
      <p>Satisfacción: {customer.satisfaction}</p>
    </div>
  );
};

export default CustomerDetailPage;
