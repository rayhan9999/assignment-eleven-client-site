import React from "react";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";


const MyToysRow = ({myToy,handleDelete}) => {
    const {_id,photo,details, sellerName,toyName,price,quantity,rating,catagory,email} = myToy
  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
              <div className="text-sm">{catagory}</div>
            </div>
          </div>
        </td>
        <td>
         
        
         {sellerName}
          <br />
          {email}
        </td>
        <td>
         {details}
         
        </td>
        <td>{price} </td>
        <td>{rating} </td>
        <td>{quantity} </td>
        <th>
         <Link to={`/updatetoys/${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
        </th>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-xs"><HiX className="text-xl" /></button>
        </th>
      </tr>
    </>
  );
};

export default MyToysRow;
