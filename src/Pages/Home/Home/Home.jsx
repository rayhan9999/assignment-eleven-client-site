import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Categories from '../Categories/Categories';
import Offer from '../Offer/Offer';
import OurService from '../../OurService/OurService';
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from "react-helmet";
const Home = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);



  return (
    <div>
      <Helmet>
        <title>Robotics Home</title>
      </Helmet>
      {loading ? (<div className="text-center">
        <ClipLoader color={"#cf1515"} loading={loading} size={50} /></div>
      ) : (
        <>
          <Banner />
          <Gallery />
          <Categories />
          <Offer />
          <OurService />
        </>
      )}
    </div>
  );
};

export default Home;