'use client';

import "./Sale.css";
import Sale from "@/app/sales/Sale";

const SaleList = ({ sales }) => {
  return (
    <ul>
      {sales.map((venta) => (
        <Sale
          _id={venta._id}
          saleDate={venta.saleDate}
          storeLocation={venta.storeLocation}
          purchaseMethod={venta.purchaseMethod}
        />
      ))}
    </ul>
  );
};

export default SaleList;
