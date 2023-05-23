import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
const SingleToys = () => {
     

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

const allToys = useLoaderData()
console.log(allToys)

const {toyName,details,email,quantity,price,_id,catagory,sellerName,photo,rating} = allToys 

  return (
    <div className="my-20">
      <Helmet>
              
              <title>KidsToyCar || Signletoys</title>
            
          </Helmet>

<div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <img
            src={photo}
            className="max-w-lg rounded-lg shadow-2xl"
          />
          
          <div className="lg:ml-8">
            <h1 className="text-5xl font-bold"> Name:{toyName}</h1>
            <p className="py-6">
             {details}
            </p>
            <p className="my-4">Price:$ {price} </p>
            <p className="my-4"> Quantity: {quantity} Store</p>
            <p className="text-lg flex gap-1 items-center">Ratings: {renderStars(rating)}{rating}</p>
            <button className="btn btn-primary mt-8">Get toy</button>
          </div>
        </div>
      </div>










    </div>
  );
};

export default SingleToys;
