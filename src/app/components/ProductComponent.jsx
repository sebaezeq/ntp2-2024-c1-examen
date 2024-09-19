// src/app/components/ProductComponent.js

import React from 'react';

const ProductComponent = ({ product }) => {
  if (!product) return <p>No product data available</p>;

  return (
    <div className="product-card">
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      {product.image && <img src={product.image} alt={product.name} />}
    </div>
  );
};

export default ProductComponent;
