'use client';

import { useState, useEffect } from "react";
import CustomerList from "@/app/sales/customer/CustomerList";

const CustomerPage = ({ params }) => {
  const { saleId } = params; 
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(100);

  useEffect(() => {
    fetch(`https://salesbackend.azurewebsites.net/api/customers?saleId=${saleId}&pageSize=${pageSize}&page=${page}`) 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCustomers(data);
      })
      .catch((error) => console.log(error));
  }, [saleId, page]); 

  return (
    <div>
      <div>
        <CustomerList customers={customers} />
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

export default CustomerPage;
