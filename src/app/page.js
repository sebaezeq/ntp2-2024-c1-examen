'use client'


import React from 'react';
import './globals.css'; 
import Link from 'next/link';


const SalesPage = () => {
  return (
    <div className="container">
      <h1>Sistemas de Ventas</h1>
      <nav>
        <ul>
        <li><Link href="/">Home</Link></li>
              <li><Link href="/sales">Ventas</Link></li>
              <li><Link href='/sales/items'>Productos</Link></li>
              <li><Link href="/sales/customer">Clientes</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default SalesPage;
