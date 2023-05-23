import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from 'sweetalert2'
const Category = ({ toy }) => {

  const { user } = useContext(AuthContext)


  // ratings render 

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= Math.floor(rating); i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (rating % 1 !== 0) {
      stars.push(
        <FaStarHalfAlt key={Math.ceil(rating)} className="text-yellow-400" />
      );
    }
    for (let i = Math.ceil(rating) + 1; i <= 5; i++) {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
    return stars;
  };

  // click handle redirect 

  const handleShow = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: '“You have to log in first to view details”',
        text: 'When you login then access in route',
        confirmButtonTxt: 'okay'
      })
    }
  }






  const { _id, toyName, price, rating, photo, catagory } = toy
  return (
    <div className="mt-10">
      <div className="card min-h-full shadow-xl">
        <figure className="">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-t-xl lg:h-[16rem] md:h-[14rem] object-cover lg:w-[32rem] md:w-[32rem]"
          />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">{toyName}</h2>
          <p className="text-xl"> Sub Catagory: {catagory}</p>
          <p className="text-lg">Price :${price}</p>
          <p className="text-lg flex gap-1 items-center">Ratings: {renderStars(rating)}{rating}</p>

          <div className="card-actions text-end mt-4">
            <Link to={`/singletoys/${_id}`}><button onClick={handleShow} className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
