
import React from 'react';
import './globals.css'; 
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
              <li><Link href='/sales/items'>Productos</Link></li>
              <li><Link href="/sales/customer">Clientes</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children} 
        </main>
        <footer>
          <p>&copy; </p>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
