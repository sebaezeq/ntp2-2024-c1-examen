'use client';

import "./Sale.css";
import Link from "next/link";

function Sale({ _id, saleDate, storeLocation, purchaseMethod }) {
    return (
      <li>
        <div>
          <Link href={`/sales/${_id}`}> 
            <div>
              <h1>{saleDate}</h1>
              <h3>{storeLocation}</h3>
              <p>{purchaseMethod}</p>
            </div>
          </Link>
        </div>
      </li>
    );
}

export default Sale;
