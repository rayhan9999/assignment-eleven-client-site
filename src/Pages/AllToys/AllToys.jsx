import React, { useContext, useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const [alltoys, setAllToys] = useState([])
  const [query, setQuery] = useState('');



  const fetchToys = async () => {
    try {
      const url = `https://assignment-eleven-server-site.vercel.app/alltoys?query=${query}`
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setAllToys(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchToys();
  }, [query]);

  const handleSearch = (event) => {
    console.log('searching')
    setQuery(event.target.value);

  };


  return (
    <div className="my-28">
      <Helmet>

        <title>Malik-Zone Robotics</title>

      </Helmet>
      <div className="flex justify-center my-10">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              defaultValue={query}
              placeholder="Search by toy name"
              onChange={handleSearch}
              className="input input-bordered"
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full ">
          <thead>
            <tr>

              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {
              alltoys.map((toy, index) => <AllToysRow
                key={index}
                index={index}
                toy={toy}


              ></AllToysRow>)




            }

          </tbody>

        </table>
      </div>







    </div>
  );
};

export default AllToys;
