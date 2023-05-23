import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const toyCarsCategories = [
    "Mini truck",
    "Regular Car",
    "Mini Fire Truck",
    "Max Truck",
    "Sports Car",
    "Stylish Car",
  ];

  const [selectedToyCars, setSelectedToyCars] = useState(toyCarsCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedToyCars(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    const form = e.target;
    const toyName = form.name.value;
    const sellerName = form.sname.value;
    const email = form.email.value;
    const catagory = form.catagory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const details = form.details.value;

    const addToys = {
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
    console.log(addToys);

    fetch("https://assignment-eleven-server-site.vercel.app/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Success fully added',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      });
  };

  return (
    <div className="my-10">
      <Helmet>
        <title>Robotics Toy</title>
      </Helmet>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 px-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Toy Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sname"
              defaultValue={user?.displayName}
              placeholder="seller name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="seller email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="inputState">
              <span className="label-text">Sub Categories</span>
            </label>
            {/* <input
              type="text"
              name="catagory"
              placeholder="category"
              className="input input-bordered"
            /> */}
            <select
              id="inputState"
              className="select select-bordered"
              name="catagory"
              defaultValue={selectedToyCars}
              onChange={handleChangeSelectedValue}
            >
              {toyCarsCategories.map((option) => (
                <option key={option} defaultValue={option}>
                  {option}
                </option>
              ))}

              {/* <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option> */}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">

            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Ratings"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="url"
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
              name="details"
              placeholder="description"
            ></textarea>
          </div>
        </div>

        <div className="text-center my-10">
          <input
            type="submit"
            value="submit"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToys;
