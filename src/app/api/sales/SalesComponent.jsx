'use client';

import React from 'react';
import '@/app/globals.css';

const SalesComponent = ({ sales, loading, page, totalPages, setPage }) => {
  return (
    <div>
      <h1>Ventas</h1>
      {loading ? <p>Loading...</p> : (
        <ul>
          {Array.isArray(sales) && sales.length > 0 ? (
            sales.map((sale) => (
              <li key={sale._id}>
                <p><strong>Sale Date:</strong> {new Date(sale.saleDate).toLocaleDateString()}</p>
                <p><strong>Store Location:</strong> {sale.storeLocation}</p>
                <p><strong>Purchase Method:</strong> {sale.purchaseMethod}</p>
              </li>
            ))
          ) : (
            <p>No sales data available</p>
          )}
        </ul>
      )}
      <div>
        <button onClick={() => setPage(Math.max(page - 1, 1))} disabled={page === 1}>Previous</button>
        <span> Page {page} of {totalPages} </span>
        <button onClick={() => setPage(Math.min(page + 1, totalPages))} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default SalesComponent;
