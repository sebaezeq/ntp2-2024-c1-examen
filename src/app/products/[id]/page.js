// src/app/products/[id]/page.js

'use client';

import React, { useEffect, useState } from 'react';
import ProductComponent from '@/app/components/ProductComponent'; // Verifica que la ruta sea correcta
import '../../globals.css'; // Verifica que la ruta sea correcta

const ProductPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://salesbackend.azurewebsites.net/api/products/${id}`);
        const data = await res.json();
        setProduct(data); // Asumiendo que data es el objeto del producto
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <h1>Productos</h1>
      {loading ? <p>Loading...</p> : <ProductComponent product={product} />}
    </div>
  );
};

export default ProductPage;
