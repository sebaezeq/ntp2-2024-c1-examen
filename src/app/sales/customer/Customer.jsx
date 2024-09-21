'use client'; 

import "./Customer.css";
import Link from "next/link";

function Customer({ _id, gender, age, email, satisfaction }) {
    return (
      
        <div>

          <Link href={`/sales/customer/${_id}`}>
            <div className="customer-info">
            <h1>Datos del Cliente</h1>
            </div>
          </Link>
        </div>
      
    );
}

export default Customer;
