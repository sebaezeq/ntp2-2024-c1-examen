'use client'; 

import "./Item.css";
import Link from "next/link";

function Item({ _id, name, price, quantity }) { 
    return (
     
        <div>
          
          <Link href={`/sales/items/${_id}`}> 
            <div className="customer-info">
            <h1>Detalle de los productos</h1>

            </div>
          </Link>
        </div>
    
    );
}

export default Item;
