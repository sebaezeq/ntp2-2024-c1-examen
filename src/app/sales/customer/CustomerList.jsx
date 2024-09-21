'use client'; 

import "./Customer.css";
import Customer from "@/app/sales/customer/Customer";

const CustomerList = ({ customers }) => {
  return (
    <ul>
      {customers.map((cliente) => ( 
        <Customer
          _id={cliente._id} 
          gender={cliente.gender}       
          age={cliente.age}  
          email={cliente.email}
          satisfaction={cliente.satisfaction}
        />
      ))}
    </ul>
  );
};

export default CustomerList;
