'use client';

import React, { useEffect, useState } from 'react';
import SalesComponent from '../api/sales/SalesComponent';

const SalesPage = () => {
  const [sales, setSales] = useState([]); // Inicializar como un array vacío
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchSales = async (pageSize = 100, page = 1) => {
    try {
      const res = await fetch(`https://salesbackend.azurewebsites.net/api/sales?pageSize=${pageSize}&page=${page}`);
      const data = await res.json();
      setSales(data.sales || []); // Asegurarse de que sales sea un array
      setTotalPages(data.totalPages || 1); // Definir un valor por defecto
      setLoading(false);
    } catch (error) {
      console.error('Error fetching sales data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSales(100, page);
  }, [page]);

  return (
    <div>
      <SalesComponent 
        sales={sales} 
        loading={loading} 
        page={page} 
        totalPages={totalPages} 
        setPage={setPage} 
      />
    </div>
  );
};

export default SalesPage;
