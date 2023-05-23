import React, { useEffect, useState } from "react";
import Category from "./Category";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categories = () => {
  const [toys, setToys] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);



  useEffect(() => {
    fetch(`https://assignment-eleven-server-site.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  console.log(toys);
  const truckToys = toys.filter(t => t.toyName.toLowerCase() === 'truck'.toLowerCase());
  const carToys = toys.filter(c => c.toyName.toLowerCase() === 'car'.toLowerCase());
  const vanToys = toys.filter(c => c.toyName.toLowerCase() === 'van'.toLowerCase());

  console.log(truckToys)
  console.log(carToys)
  console.log(vanToys)



  return (
    <div className="my-28 text-center">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          toys.map(toy => <Category
          key={toy._id}
          toy = {toy}
          >

          </Category>)
        }
      </div> */}
      <h2 className="text-center my-10 text-2xl font-bold" data-aos="fade-up">Toy Collection </h2>
      <Tabs>
        <TabList className="flex justify-center underline">
          <Tab>Spider </Tab>
          <Tab>Batman</Tab>
          <Tab>X-Man</Tab>


        </TabList>
        <hr />
        <TabPanel >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {truckToys &&
              truckToys.map((toy, index) => (

                <Category key={index} toy={toy} />

              ))}
          </div>
        </TabPanel>
        <TabPanel >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {carToys &&
              carToys.map((toy, index) => (

                <Category key={index} toy={toy} />

              ))}
          </div>
        </TabPanel>
        <TabPanel >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vanToys &&
              vanToys.map((toy, index) => (

                <Category key={index} toy={toy} />

              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
