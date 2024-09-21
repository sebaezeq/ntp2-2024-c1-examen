'use client';

import "./Item.css";
import Item from "@/app/sales/items/Item";

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((producto) => ( 
        <Item
          _id={producto._id} 
          name={producto.name}       
          price={producto.price}
          quantity={producto.quantity}
        />
      ))}
    </ul>
  );
};

export default ItemList;
