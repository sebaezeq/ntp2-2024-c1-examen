'use client';

import { useState, useEffect } from "react";
import SaleList from "@/app/sales/SaleList";

const SalePage = () => {
  const [sales, setSales] = useState([]);
  const [page, setPage] = useState(1); 
  const [pageSize] = useState(100); 

  useEffect(() => {
    fetch(`https://salesbackend.azurewebsites.net/api/sales?pageSize=${pageSize}&page=${page}`) 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSales(data);
      })
      .catch((error) => console.log(error));
  }, [page]); 

  return (
    <div>
      <div>
        <SaleList sales={sales} />
      </div>
      <div className="pagination">
        <button 
          onClick={() => setPage((prevPage) => prevPage - 1)} 
          disabled={page === 1} 
        >
          Previous
        </button>
        <button 
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SalePage;
