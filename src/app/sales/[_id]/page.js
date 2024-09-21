'use client'; 

import { useState, useEffect } from "react";
import Customer from "@/app/sales/customer/Customer"; 
import ItemsList from "@/app/sales/items/ItemList"; 

function SaleDetails({ params }) {
  const { _id } = params; 
  const [sale, setSale] = useState({
    saleDate: 'Cargando...',
    storeLocation: 'Cargando...',
    purchaseMethod: 'Cargando...',
    customer: {},
    items: []
  });

  useEffect(() => {
    fetch(`https://salesbackend.azurewebsites.net/api/sales/${_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSale(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id]);

  return (
    <div className="sale-details">
      <h1>Detalles de la Venta</h1>
      <div>
        <Customer {...sale.customer} />
        <ItemsList items={sale.items} />
      </div>
    </div>
  );
}

export default SaleDetails;
