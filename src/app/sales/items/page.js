'use client';

import { useState, useEffect } from "react";
import ItemsList from "@/app/sales/items/ItemList";

const ItemPage = ({ params }) => {
  const { saleId } = params; 
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1); 
  const [pageSize] = useState(100); 

  useEffect(() => {
    if (saleId) {
      fetch(`https://salesbackend.azurewebsites.net/api/sales/${saleId}/items?pageSize=${pageSize}&page=${page}`) 
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setItems(data);
        })
        .catch((error) => console.log(error));
    }
  }, [saleId, page]); 

  return (
    <div>
      <div>
        <ItemsList items={items} />
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

export default ItemPage;
