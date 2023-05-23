import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const [sortOrder, setSortOrder] = useState("asc");

  const url = `https://assignment-eleven-server-site.vercel.app/mytoys?email=${user?.email}&sortOrder=${sortOrder}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-eleven-server-site.vercel.app/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="my-20">
      <Helmet>
        <title>KidsToyCar || MyToys</title>
      </Helmet>

      {/* <button onClick={handleSort}>
              Price {sortOrder === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
            </button> */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>User</th>
              <th>Details </th>
              <th>
                Price
                <button className="btn btn-xs ml-2" onClick={handleSort}>
                  {sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />}
                </button>
              </th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy, i) => (
              <MyToysRow
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
