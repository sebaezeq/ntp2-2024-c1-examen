'use client'


import React from 'react';
import './globals.css'; // Importa tus estilos globales
import Link from 'next/link';


const SalesPage = () => {
  return (
    <div className="container">
      <h1>Sistemas de Ventas</h1>
      <nav>
        <ul>
        <li><Link href="/sales">Ventas</Link></li>
              <li><Link href='/products/${id}'>Productos</Link></li>
              <li><Link href="/customer/${id}">Clientes</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default SalesPage;
