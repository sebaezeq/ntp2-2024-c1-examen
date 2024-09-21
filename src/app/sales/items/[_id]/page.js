'use client';

import { useState, useEffect } from "react";

const ItemDetailPage = ({ params }) => {
  const { _id } = params;
  const [item, setItem] = useState({
    name: 'Cargando...',
    price: 'Cargando...',
    quantity: 'Cargando...',
  });

  useEffect(() => {
    fetch(`https://salesbackend.azurewebsites.net/api/items/${_id}`) 
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      })
      .catch((error) => console.log(error));
  }, [_id]);

  return (
    <div>
      <h2>Nombre: {item.name}</h2>
      <h3>Precio: {item.price}</h3>
      <p>Cantidad: {item.quantity}</p>
    </div>
  );
};

export default ItemDetailPage;
