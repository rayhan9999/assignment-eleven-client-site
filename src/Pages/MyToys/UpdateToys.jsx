import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateToys = () => {

  const myToy = useLoaderData()


  console.log(myToy);

  const { _id, photo, details, toyName, price, quantity, sellerName, email, catagory, rating } = myToy

  const handleUpdated = (e) => {
    e.preventDefault();
    // Handle form submission logic here 

    const form = e.target;
    const toyName = form.name.value;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const details = form.details.value;

    const updatedToy = {
      toyName,
      sellerName,
      email,
      catagory,
      price,
      rating,
      quantity,
      photo,
      details,
    };
    console.log(updatedToy);


    fetch(`https://assignment-eleven-server-site.vercel.app/mytoys/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedToy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'toys Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })




  };

  return (
    <>
      <div className="my-10">
        <form onSubmit={handleUpdated}>
          <div className="grid grid-cols-2 gap-4 px-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={toyName}
                placeholder="Toy Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                defaultValue={quantity}
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="url"
                defaultValue={photo}
                name="photo"
                placeholder="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>

              <textarea
                className="textarea textarea-bordered"
                type="text"
                defaultValue={details}
                name="details"
                placeholder="description"
              ></textarea>
            </div>
          </div>

          <div className="text-center my-10">
            <input
              type="submit"
              value="Updated"
              className="btn btn-primary btn-block"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateToys;
