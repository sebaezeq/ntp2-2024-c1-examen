// src/app/layout.js

import React from 'react';
import './globals.css'; // Importa tus estilos globales
import Link from 'next/link';

export const metadata = {
  title: 'Tu Aplicación',
  description: 'Descripción de tu aplicación',
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <header>
          <nav>
            <ul>
            <li><Link href="/">Home</Link></li>
              <li><Link href="/sales">Ventas</Link></li>
              <li><Link href='/products/${id}'>Productos</Link></li>
              <li><Link href="/customer/${id}">Clientes</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children} {/* Aquí se renderizarán las páginas */}
        </main>
        <footer>
          <p>&copy; 2024 Tu Empresa</p>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
