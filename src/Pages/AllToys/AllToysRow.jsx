import React from 'react';
import { Link } from 'react-router-dom';




const AllToysRow = ({index,toy}) => {
    const {toyName,quantity,price,_id,catagory,sellerName} = toy 
   


    return (
        <>
        <tr>
        <th>{index+1}</th> 
        <td>{toyName}</td> 
        <td>{sellerName}</td>
        <td>{catagory}</td> 
        <td>$ {price}</td> 
        <td>{quantity}</td> 
         
        <th>
          <Link to={`/singletoys/${_id}`}><button className="btn btn-link text-blue-600 btn-xs">Details</button></Link>
        </th>
      </tr>
            
        </>
    );
};

export default AllToysRow;